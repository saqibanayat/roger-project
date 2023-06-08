"use strict";

const express = require("express");
const router = express.Router();
router.use(express.json());
const pool = require("../DBconnection");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
var nodemailer = require("nodemailer");
const catchAsyncFunction = require('../middlewares/catchAsyncFun')
let app = express();
let bodyParser = require("body-parser");
const { query } = require("express");
const fs = require("fs");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

///////////////////////////////////
///////////Create user/////////////
exports.signup = catchAsyncFunction(async(req, res) => {
    try {

        if (!(req.body.firstname && req.body.email && req.body.password && req.body.businessname)) {
            return res.status(401).json({ 'success': false, error: "please fill all the credentials" })
        } else {
            // user exist or not
            const VerifyUser = await pool.query('select * from users where email = $1', [req.body.email])
            console.log(VerifyUser.rows[0])

            if (VerifyUser.rows[0]) return res.status(401).json({ 'success': false, message: "this user is already existed" });

            // create new user
            const hashedPassword = await bcrypt.hash(req.body.password, 10);
            const user = await pool.query(
                //     'INSERT INTO users (firstname,lastname,email,Password,businessname,industry,province) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING *  '
                // ,   [req.body.firstname,req.body.lastname,req.body.email,hashedPassword,req.body.businessname,req.body.industry,req.body.province])

                'INSERT INTO users (firstname,lastname,email,password,businessname) VALUES ($1,$2,$3,$4,$5) RETURNING *  ', [req.body.firstname, req.body.lastname, req.body.email, hashedPassword, req.body.businessname]

            )

            const user_id = user.rows[0].id;
            const role = await pool.query(
                // insert into rolePermission (role_id,permission_id) values(1,1);
                'INSERT INTO roleUser (role_id,user_id) VALUES ($1,$2) RETURNING *  ', [req.body.role_id, user_id]
            )
            const userRole = await pool.query('select roles.title from roleuser join roles on roleuser.role_id = roles.id where roleuser.user_id =$1', [user_id])

            const hashedlink = await bcrypt.hash(req.body.email, 10);
            // console.log(hashedlink);
            const user_token = await pool.query(
                'INSERT INTO users_varify_token (user_id,token) VALUES ($1,$2)', [user_id, hashedlink]
            )
            const user_block = await pool.query(
                'INSERT INTO user_block_status (user_id,status) VALUES ($1,$2)', [user_id, 1]
            )
            var transporter = nodemailer.createTransport({
                host: "engcoders.com",
                port: 465,
                secure: true, // true for 465, false for other ports
                auth: {
                    user: 'testing@engcoders.com',
                    pass: 'n!),kFItvacp'
                }
            });
            var link = process.env.apiUrl + "/auth/verify-account?id=" + hashedlink;
            console.log(link);
            var mailOptions = {
                from: 'testing@engcoders.com',
                to: req.body.email,
                title: 'Spruce Cloud Inc',
                subject: 'Welcome to Spruce Cloud Inc',
                html: "<!DOCTYPE html><html lang='en' xmlns='http://www.w3.org/1999/xhtml' xmlns:v='urn:schemas-microsoft-com:vml' xmlns:o='urn:schemas-microsoft-com:office:office'><head>    <meta charset='utf-8'>    <meta name='viewport' content='width=device-width'>    <meta http-equiv='X-UA-Compatible' content='IE=edge'>    <meta name='x-apple-disable-message-reformatting'>    <title></title>    <style id='' media='all'>        /* latin-ext */                @font-face {            font-family: 'Lato';            font-style: normal;            font-weight: 300;            font-display: swap;            src: url(/fonts.gstatic.com/s/lato/v23/S6u9w4BMUTPHh7USSwaPGR_p.woff2) format('woff2');            unicode-range: U+0100-02AF, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;        }        /* latin */                @font-face {            font-family: 'Lato';            font-style: normal;            font-weight: 300;            font-display: swap;            src: url(/fonts.gstatic.com/s/lato/v23/S6u9w4BMUTPHh7USSwiPGQ.woff2) format('woff2');            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;        }        /* latin-ext */                @font-face {            font-family: 'Lato';            font-style: normal;            font-weight: 400;            font-display: swap;            src: url(/fonts.gstatic.com/s/lato/v23/S6uyw4BMUTPHjxAwXjeu.woff2) format('woff2');            unicode-range: U+0100-02AF, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;        }        /* latin */                @font-face {            font-family: 'Lato';            font-style: normal;            font-weight: 400;            font-display: swap;            src: url(/fonts.gstatic.com/s/lato/v23/S6uyw4BMUTPHjx4wXg.woff2) format('woff2');            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;        }        /* latin-ext */                @font-face {            font-family: 'Lato';            font-style: normal;            font-weight: 700;            font-display: swap;            src: url(/fonts.gstatic.com/s/lato/v23/S6u9w4BMUTPHh6UVSwaPGR_p.woff2) format('woff2');            unicode-range: U+0100-02AF, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;        }        /* latin */                @font-face {            font-family: 'Lato';            font-style: normal;            font-weight: 700;            font-display: swap;            src: url(/fonts.gstatic.com/s/lato/v23/S6u9w4BMUTPHh6UVSwiPGQ.woff2) format('woff2');            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;        }    </style>    <style>        /* What it does: Remove spaces around the email design added by some email clients. */        /* Beware: It can remove the padding / margin and add a background color to the compose a reply window. */                html,        body {            margin: 0 auto !important;            padding: 0 !important;            height: 100% !important;            width: 100% !important;            background: #f1f1f1;        }        /* What it does: Stops email clients resizing small text. */                * {            -ms-text-size-adjust: 100%;            -webkit-text-size-adjust: 100%;        }        /* What it does: Centers email on Android 4.4 */                div[style*='margin: 16px 0'] {            margin: 0 !important;        }        /* What it does: Stops Outlook from adding extra spacing to tables. */                table,        td {            mso-table-lspace: 0pt !important;            mso-table-rspace: 0pt !important;        }        /* What it does: Fixes webkit padding issue. */                table {            border-spacing: 0 !important;            border-collapse: collapse !important;            table-layout: fixed !important;            margin: 0 auto !important;        }        /* What it does: Uses a better rendering method when resizing images in IE. */                img {            -ms-interpolation-mode: bicubic;        }        /* What it does: Prevents Windows 10 Mail from underlining links despite inline CSS. Styles for underlined links should be inline. */                a {            text-decoration: none;        }        /* What it does: A work-around for email clients meddling in triggered links. */                *[x-apple-data-detectors],        /* iOS */                .unstyle-auto-detected-links *,        .aBn {            border-bottom: 0 !important;            cursor: default !important;            color: inherit !important;            text-decoration: none !important;            font-size: inherit !important;            font-family: inherit !important;            font-weight: inherit !important;            line-height: inherit !important;        }        /* What it does: Prevents Gmail from displaying a download button on large, non-linked images. */                .a6S {            display: none !important;            opacity: 0.01 !important;        }        /* What it does: Prevents Gmail from changing the text color in conversation threads. */                .im {            color: inherit !important;        }        /* If the above doesn't work, add a .g-img class to any image in question. */                img.g-img+div {            display: none !important;        }        /* What it does: Removes right gutter in Gmail iOS app: https://github.com/TedGoas/Cerberus/issues/89  */        /* Create one of these media queries for each additional viewport size you'd like to fix */        /* iPhone 4, 4S, 5, 5S, 5C, and 5SE */                @media only screen and (min-device-width: 320px) and (max-device-width: 374px) {            u~div .email-container {                min-width: 320px !important;            }        }        /* iPhone 6, 6S, 7, 8, and X */                @media only screen and (min-device-width: 375px) and (max-device-width: 413px) {            u~div .email-container {                min-width: 375px !important;            }        }        /* iPhone 6+, 7+, and 8+ */                @media only screen and (min-device-width: 414px) {            u~div .email-container {                min-width: 414px !important;            }        }    </style>    <style>        .primary {            background: #30e3ca;        }                .bg_white {            background: #ffffff;        }                .bg_light {            background: #fafafa;        }                .bg_black {            background: #000000;        }                .bg_dark {            background: rgba(0, 0, 0, .8);        }                .email-section {            padding: 2.5em;        }        /*BUTTON*/                .btn {            padding: 10px 15px;            display: inline-block;        }                .btn.btn-primary {            border-radius: 5px;            background: #30e3ca;            color: #ffffff;        }                .btn.btn-white {            border-radius: 5px;            background: #ffffff;            color: #000000;        }                .btn.btn-white-outline {            border-radius: 5px;            background: transparent;            border: 1px solid #fff;            color: #fff;        }                .btn.btn-black-outline {            border-radius: 0px;            background: transparent;            border: 2px solid #000;            color: #000;            font-weight: 700;        }                h1,        h2,        h3,        h4,        h5,        h6 {            font-family: 'Lato', sans-serif;            color: #000000;            margin-top: 0;            font-weight: 400;        }                body {            font-family: 'Lato', sans-serif;            font-weight: 400;            font-size: 15px;            line-height: 1.8;            color: rgba(0, 0, 0, .4);        }                a {            color: #30e3ca;        }                table {}        /*LOGO*/                .logo h1 {            margin: 0;        }                .logo h1 a {            color: #30e3ca;            font-size: 24px;            font-weight: 700;            font-family: 'Lato', sans-serif;        }        /*HERO*/                .hero {            position: relative;            z-index: 0;        }                .hero .text {            color: rgba(0, 0, 0, .3);        }                .hero .text h2 {            color: #000;            font-size: 40px;            margin-bottom: 0;            font-weight: 400;            line-height: 1.4;        }                .hero .text h3 {            font-size: 24px;            font-weight: 300;        }                .hero .text h2 span {            font-weight: 600;            color: #30e3ca;        }        /*HEADING SECTION*/                .heading-section {}                .heading-section h2 {            color: #000000;            font-size: 28px;            margin-top: 0;            line-height: 1.4;            font-weight: 400;        }                .heading-section .subheading {            margin-bottom: 20px !important;            display: inline-block;            font-size: 13px;            text-transform: uppercase;            letter-spacing: 2px;            color: rgba(0, 0, 0, .4);            position: relative;        }                .heading-section .subheading::after {            position: absolute;            left: 0;            right: 0;            bottom: -10px;            content: '';            width: 100%;            height: 2px;            background: #30e3ca;            margin: 0 auto;        }                .heading-section-white {            color: rgba(255, 255, 255, .8);        }                .heading-section-white h2 {            font-family: line-height: 1;            padding-bottom: 0;        }                .heading-section-white h2 {            color: #ffffff;        }                .heading-section-white .subheading {            margin-bottom: 0;            display: inline-block;            font-size: 13px;            text-transform: uppercase;            letter-spacing: 2px;            color: rgba(255, 255, 255, .4);        }                ul.social {            padding: 0;        }                ul.social li {            display: inline-block;            margin-right: 10px;        }        /*FOOTER*/                .footer {            border-top: 1px solid rgba(0, 0, 0, .05);            color: rgba(0, 0, 0, .5);        }                .footer .heading {            color: #000;            font-size: 20px;        }                .footer ul {            margin: 0;            padding: 0;        }                .footer ul li {            list-style: none;            margin-bottom: 10px;        }                .footer ul li a {            color: rgba(0, 0, 0, 1);        }                @media screen and (max-width: 500px) {}    </style>    <meta name='robots' content='noindex, follow'>    <script nonce='dd803d05-b5a2-41be-8fa8-717dd7f12816'>        (function(w, d) {            ! function(bv, bw, bx, by) {                bv[bx] = bv[bx] || {};                bv[bx].executed = [];                bv.zaraz = {                    deferred: [],                    listeners: []                };                bv.zaraz.q = [];                bv.zaraz._f = function(bz) {                    return function() {                        var bA = Array.prototype.slice.call(arguments);                        bv.zaraz.q.push({                            m: bz,                            a: bA                        })                    }                };                for (const bB of['track', 'set', 'debug']) bv.zaraz[bB] = bv.zaraz._f(bB);                bv.zaraz.init = () => {                    var bC = bw.getElementsByTagName(by)[0],                        bD = bw.createElement(by),                        bE = bw.getElementsByTagName('title')[0];                    bE && (bv[bx].t = bw.getElementsByTagName('title')[0].text);                    bv[bx].x = Math.random();                    bv[bx].w = bv.screen.width;                    bv[bx].h = bv.screen.height;                    bv[bx].j = bv.innerHeight;                    bv[bx].e = bv.innerWidth;                    bv[bx].l = bv.location.href;                    bv[bx].r = bw.referrer;                    bv[bx].k = bv.screen.colorDepth;                    bv[bx].n = bw.characterSet;                    bv[bx].o = (new Date).getTimezoneOffset();                    if (bv.dataLayer)                        for (const bI of Object.entries(Object.entries(dataLayer).reduce(((bJ, bK) => ({...bJ[1],                                ...bK[1]                            }))))) zaraz.set(bI[0], bI[1], {                            scope: 'page'                        });                    bv[bx].q = [];                    for (; bv.zaraz.q.length;) {                        const bL = bv.zaraz.q.shift();                        bv[bx].q.push(bL)                    }                    bD.defer = !0;                    for (const bM of[localStorage, sessionStorage]) Object.keys(bM || {}).filter((bO => bO.startsWith('_zaraz_'))).forEach((bN => {                        try {                            bv[bx]['z_' + bN.slice(7)] = JSON.parse(bM.getItem(bN))                        } catch {                            bv[bx]['z_' + bN.slice(7)] = bM.getItem(bN)                        }                    }));                    bD.referrerPolicy = 'origin';                    bD.src = '/cdn-cgi/zaraz/s.js?z=' + btoa(encodeURIComponent(JSON.stringify(bv[bx])));                    bC.parentNode.insertBefore(bD, bC)                };                ['complete', 'interactive'].includes(bw.readyState) ? zaraz.init() : bv.addEventListener('DOMContentLoaded', zaraz.init)            }(w, d, 'zarazData', 'script');        })(window, document);    </script></head><body width='100%' style='margin: 0; padding: 0 !important; mso-line-height-rule: exactly; background-color: #f1f1f1;'>    <center style='width: 100%; background-color: #f1f1f1;'>        <div style='display: none; font-size: 1px;max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden; mso-hide: all; font-family: sans-serif;'>            &zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;        </div>        <div style='max-width: 600px; margin: 0 auto;' className='email-container'>            <table align='center' role='presentation' cellspacing='0' cellpadding='0' border='0' width='100%' style='margin: auto;'>                <tr>                    <td valign='top' className='bg_white' style='padding: 1em 2.5em 0 2.5em;'>                        <table role='presentation' border='0' cellpadding='0' cellspacing='0' width='100%'>                            <tr>                                <td className='logo' style='text-align: center;'>                                    <h1><a href='#'>Spruce Cloud Inc.</a></h1>                                </td>                            </tr>                        </table>                    </td>                </tr>                <tr>                    <td valign='middle' className='hero bg_white' style='padding: 3em 0 2em 0;'>                        <img src='images/email.png' alt='' style='width: 300px; max-width: 600px; height: auto; margin: auto; display: block;'>                    </td>                </tr>                <tr>                    <td valign='middle' className='hero bg_white' style='padding: 2em 0 4em 0;'>                        <table>                            <tr>                                <td>                                    <div className='text' style='padding: 0 2.5em; text-align: center;'>                                        <h2>Please verify your email</h2>                                        <h3>Amazing deals, updates, interesting news right in your inbox</h3>                                        <p><a href='" + link + "' className='btn btn-primary'>Yes! Verify Email Address</a></p>                                    </div>                                </td>                            </tr>                        </table>                    </td>                </tr>            </table>        </div>    </center>    <script async src='https://www.googletagmanager.com/gtag/js?id=UA-23581568-13'></script>    <script>        window.dataLayer = window.dataLayer || [];        function gtag() {            dataLayer.push(arguments);        }        gtag('js', new Date());        gtag('config', 'UA-23581568-13');    </script>    <script defer src='https://static.cloudflareinsights.com/beacon.min.js/vb26e4fa9e5134444860be286fd8771851679335129114' integrity='sha512-M3hN/6cva/SjwrOtyXeUa5IuCT0sedyfT+jK/OV+s+D0RnzrTfwjwJHhd+wYfMm9HJSrZ1IKksOdddLuN6KOzw==' data-cf-beacon='{' rayId        ':'7b28dd480df5a3dc ','token ':'cd0b4b3a733644fc843ef0b185f98241 ','version ':'2023.3.0 ','si ':100}' crossorigin='anonymous'></script></body></html>",
            };

            transporter.sendMail(mailOptions, function(error, info) {
                if (error) {
                    console.log(error);
                } else {
                    console.log('Email sent: ' + info.response);
                }
            });
            console.log(user.rows[0])
            const token = authToken(user.rows[0])
            res.json({
                'success': true,
                message: 'Email send to your Account please verify',
                token: token,
                user: user.rows[0],
                role: userRole.rows
            })


        }

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
})





/////////////////////////////////
////////// Login user////////////


exports.login = catchAsyncFunction(async(req, res) => {
    console.log("123");
    const user = await pool.query("select * from users where email = $1", [
        req.body.email,
    ]);

    if (!user.rows[0]) {
        return res.json({
            'success': false,
            message: "invalid credentials"
        });
    } else {
        // return res.json({message:'good'})
        console.log(user.rows[0].password, "password");
        const validPassword = bcrypt.compareSync(
            req.body.password,
            user.rows[0].password
        );
        console.log(validPassword, "2sra");
        if (!validPassword) {
            return res.json({
                'success': false,
                message: "invalid credentials"
            });
        } else {
            const userVerified = await pool.query(
                "select email_varified_at from users where email = $1 ", [req.body.email]
            );
            const userRole = await pool.query('select roles.title from roleuser join roles on roleuser.role_id = roles.id where roleuser.user_id =$1', [user.rows[0].id])
            console.log(userRole.rows, "role");
            if (!userVerified.rows[0].email_varified_at) {
                return res.json({
                    'success': false,
                    message: "need user verification"
                });
            } else {
                const blockUsers = await pool.query('select * from user_block_status where user_id =$1', [user.rows[0].id])
                if (blockUsers.rows[0].status == 0) {
                    return res.json({
                        'success': false,
                        message: "Your Account is suspended by admin"
                    });
                } else {
                    console.log(user.rows[0]);
                    const token = authToken(user.rows[0]);
                    res.json({
                        'success': true,
                        message: 'user login successfully!',
                        token: token,
                        user: user.rows[0],
                        'Role': userRole.rows
                    });
                }
            }
        }
    }
})

// Account verification
exports.accountVerify = catchAsyncFunction(async(req, res) => {
    const user_id_token = await pool.query(
        "select user_id from users_varify_token  where token = $1", [req.query.id]
    );
    const varify_email = await pool.query(
        "UPDATE users SET email_varified_at=CURRENT_TIMESTAMP WHERE id=$1;", [user_id_token.rows[0].user_id]
    );
    var link = process.env.frontendUrl + '/web/verifiedEmail/'
    console.log(link);
    res.redirect(link)
})

// Chnage password
exports.changePassword = catchAsyncFunction(async(req, res) => {
    let user = await pool.query("select * from users where id = $1", [
        req.params.id,
    ]);
    console.log(user.rows[0]);
    if (!user.rows[0]) {
        return res.json({ message: "user not found" });
    }
    console.log(user.rows[0].password, "pass");
    let { password, newpassword, confirmpassword } = req.body;
    if (!bcrypt.compareSync(password, user.rows[0].password)) {
        return res.json({ message: "oldpassword does not match" });
    }
    if (newpassword != confirmpassword) {
        return res.json({ message: "newpassword does not match" });
    }

    const hashedPassword = await bcrypt.hash(newpassword, 10);
    console.log(hashedPassword, "newhasehd");

    user.rows[0].password = hashedPassword;

    console.log(user.rows[0], "updated user");
    await pool.query("update users set password = $1 where id =$2", [
        hashedPassword,
        req.params.id,
    ]);
    res.json({
        message: "Password changed successfully",
    });
})


// user details api
exports.userDetails = catchAsyncFunction(async(req, res) => {
    let user = await pool.query("select * from users where id = $1", [
        req.body.id,
    ]);
    console.log(user.rows[0]);
    res.json({
        'success': true,
        message: 'user details fetched successfully!',
        user: user.rows[0]
    });
})


// user update api
exports.userUpdate = catchAsyncFunction(async(req, res) => {
    if (req.body.image) {
        const d = new Date();
        let time = d.getTime();
        var data = req.body.image;

        var jpeg = data.search("data:image/jpeg;base64,");
        var jpg = data.search("data:image/jpg;base64,");
        // console.log(jpg);
        if (jpeg >= 0) {
            // console.log('jpeg');
            var base64Data = data.replace(/^data:image\/jpeg;base64,/, "");
        } else if (jpg >= 0) {
            console.log('jpg');
            var base64Data = data.replace(/^data:image\/jpg;base64,/, "");
        } else {
            console.log('no');
            var base64Data = data.replace(/^data:image\/png;base64,/, "");
        }
        var filename = time + ".png"
        require("fs").writeFile("./files/" + filename, base64Data, 'base64', function(err) {
            console.log(err);
        });
        const last_image = await pool.query(
            'select image from users where id = $1', [req.body.id]
        )
        console.log(last_image.rows[0]);
        if (last_image.rows[0] != null) {
            const path = "./files/" + last_image.rows[0].image

            try {
                fs.unlinkSync(path)
                    //file removed
            } catch (err) {
                console.error(err)
            }
        }
    } else {
        filename = null;
    }
    let user = await pool.query("UPDATE users SET firstname= $1,lastname=$2,businessname=$3 ,image=$5  WHERE id=$4 RETURNING *", [
        req.body.firstname, req.body.lastname, req.body.businessname, req.body.id, filename
    ]);
    console.log(user.rows[0]);
    res.json({
        'success': true,
        message: 'user details fetched successfully!',
        user: user.rows[0]
    });
})


// forget password link  api
exports.forgetLink = catchAsyncFunction(async(req, res) => {

    let user = await pool.query("select * from users WHERE email=$1", [req.body.email]);
    // console.log(user.rows.length);
    if (user.rows.length == 0) {
        res.json({
            'success': false,
            message: 'user not found!',
        });
    } else {
        const user_id = user.rows[0].id;
        const hashedlink = await bcrypt.hash(req.body.email, 10);
        // console.log(hashedlink);
        const user_token = await pool.query(
            'INSERT INTO user_forget_password_token (user_id,token) VALUES ($1,$2)', [user_id, hashedlink]
        )
        var transporter = nodemailer.createTransport({
            host: "engcoders.com",
            port: 465,
            secure: true, // true for 465, false for other ports
            auth: {
                user: 'testing@engcoders.com',
                pass: 'n!),kFItvacp'
            }
        });
        var link = process.env.apiUrl + "/auth/forget-password?id=" + hashedlink;
        console.log(link);
        var mailOptions = {
            from: 'testing@engcoders.com',
            to: req.body.email,
            title: 'Spruce Cloud Inc',
            subject: 'Please reset your password',
            html: "<!DOCTYPE html><html lang='en' xmlns='http://www.w3.org/1999/xhtml' xmlns:v='urn:schemas-microsoft-com:vml' xmlns:o='urn:schemas-microsoft-com:office:office'><head>    <meta charset='utf-8'>    <meta name='viewport' content='width=device-width'>    <meta http-equiv='X-UA-Compatible' content='IE=edge'>    <meta name='x-apple-disable-message-reformatting'>    <title></title>    <style id='' media='all'>        /* latin-ext */                @font-face {            font-family: 'Lato';            font-style: normal;            font-weight: 300;            font-display: swap;            src: url(/fonts.gstatic.com/s/lato/v23/S6u9w4BMUTPHh7USSwaPGR_p.woff2) format('woff2');            unicode-range: U+0100-02AF, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;        }        /* latin */                @font-face {            font-family: 'Lato';            font-style: normal;            font-weight: 300;            font-display: swap;            src: url(/fonts.gstatic.com/s/lato/v23/S6u9w4BMUTPHh7USSwiPGQ.woff2) format('woff2');            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;        }        /* latin-ext */                @font-face {            font-family: 'Lato';            font-style: normal;            font-weight: 400;            font-display: swap;            src: url(/fonts.gstatic.com/s/lato/v23/S6uyw4BMUTPHjxAwXjeu.woff2) format('woff2');            unicode-range: U+0100-02AF, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;        }        /* latin */                @font-face {            font-family: 'Lato';            font-style: normal;            font-weight: 400;            font-display: swap;            src: url(/fonts.gstatic.com/s/lato/v23/S6uyw4BMUTPHjx4wXg.woff2) format('woff2');            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;        }        /* latin-ext */                @font-face {            font-family: 'Lato';            font-style: normal;            font-weight: 700;            font-display: swap;            src: url(/fonts.gstatic.com/s/lato/v23/S6u9w4BMUTPHh6UVSwaPGR_p.woff2) format('woff2');            unicode-range: U+0100-02AF, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;        }        /* latin */                @font-face {            font-family: 'Lato';            font-style: normal;            font-weight: 700;            font-display: swap;            src: url(/fonts.gstatic.com/s/lato/v23/S6u9w4BMUTPHh6UVSwiPGQ.woff2) format('woff2');            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;        }    </style>    <style>        /* What it does: Remove spaces around the email design added by some email clients. */        /* Beware: It can remove the padding / margin and add a background color to the compose a reply window. */                html,        body {            margin: 0 auto !important;            padding: 0 !important;            height: 100% !important;            width: 100% !important;            background: #f1f1f1;        }        /* What it does: Stops email clients resizing small text. */                * {            -ms-text-size-adjust: 100%;            -webkit-text-size-adjust: 100%;        }        /* What it does: Centers email on Android 4.4 */                div[style*='margin: 16px 0'] {            margin: 0 !important;        }        /* What it does: Stops Outlook from adding extra spacing to tables. */                table,        td {            mso-table-lspace: 0pt !important;            mso-table-rspace: 0pt !important;        }        /* What it does: Fixes webkit padding issue. */                table {            border-spacing: 0 !important;            border-collapse: collapse !important;            table-layout: fixed !important;            margin: 0 auto !important;        }        /* What it does: Uses a better rendering method when resizing images in IE. */                img {            -ms-interpolation-mode: bicubic;        }        /* What it does: Prevents Windows 10 Mail from underlining links despite inline CSS. Styles for underlined links should be inline. */                a {            text-decoration: none;        }        /* What it does: A work-around for email clients meddling in triggered links. */                *[x-apple-data-detectors],        /* iOS */                .unstyle-auto-detected-links *,        .aBn {            border-bottom: 0 !important;            cursor: default !important;            color: inherit !important;            text-decoration: none !important;            font-size: inherit !important;            font-family: inherit !important;            font-weight: inherit !important;            line-height: inherit !important;        }        /* What it does: Prevents Gmail from displaying a download button on large, non-linked images. */                .a6S {            display: none !important;            opacity: 0.01 !important;        }        /* What it does: Prevents Gmail from changing the text color in conversation threads. */                .im {            color: inherit !important;        }        /* If the above doesn't work, add a .g-img class to any image in question. */                img.g-img+div {            display: none !important;        }        /* What it does: Removes right gutter in Gmail iOS app: https://github.com/TedGoas/Cerberus/issues/89  */        /* Create one of these media queries for each additional viewport size you'd like to fix */        /* iPhone 4, 4S, 5, 5S, 5C, and 5SE */                @media only screen and (min-device-width: 320px) and (max-device-width: 374px) {            u~div .email-container {                min-width: 320px !important;            }        }        /* iPhone 6, 6S, 7, 8, and X */                @media only screen and (min-device-width: 375px) and (max-device-width: 413px) {            u~div .email-container {                min-width: 375px !important;            }        }        /* iPhone 6+, 7+, and 8+ */                @media only screen and (min-device-width: 414px) {            u~div .email-container {                min-width: 414px !important;            }        }    </style>    <style>        .primary {            background: #30e3ca;        }                .bg_white {            background: #ffffff;        }                .bg_light {            background: #fafafa;        }                .bg_black {            background: #000000;        }                .bg_dark {            background: rgba(0, 0, 0, .8);        }                .email-section {            padding: 2.5em;        }        /*BUTTON*/                .btn {            padding: 10px 15px;            display: inline-block;        }                .btn.btn-primary {            border-radius: 5px;            background: #30e3ca;            color: #ffffff;        }                .btn.btn-white {            border-radius: 5px;            background: #ffffff;            color: #000000;        }                .btn.btn-white-outline {            border-radius: 5px;            background: transparent;            border: 1px solid #fff;            color: #fff;        }                .btn.btn-black-outline {            border-radius: 0px;            background: transparent;            border: 2px solid #000;            color: #000;            font-weight: 700;        }                h1,        h2,        h3,        h4,        h5,        h6 {            font-family: 'Lato', sans-serif;            color: #000000;            margin-top: 0;            font-weight: 400;        }                body {            font-family: 'Lato', sans-serif;            font-weight: 400;            font-size: 15px;            line-height: 1.8;            color: rgba(0, 0, 0, .4);        }                a {            color: #30e3ca;        }                table {}        /*LOGO*/                .logo h1 {            margin: 0;        }                .logo h1 a {            color: #30e3ca;            font-size: 24px;            font-weight: 700;            font-family: 'Lato', sans-serif;        }        /*HERO*/                .hero {            position: relative;            z-index: 0;        }                .hero .text {            color: rgba(0, 0, 0, .3);        }                .hero .text h2 {            color: #000;            font-size: 40px;            margin-bottom: 0;            font-weight: 400;            line-height: 1.4;        }                .hero .text h3 {            font-size: 24px;            font-weight: 300;        }                .hero .text h2 span {            font-weight: 600;            color: #30e3ca;        }        /*HEADING SECTION*/                .heading-section {}                .heading-section h2 {            color: #000000;            font-size: 28px;            margin-top: 0;            line-height: 1.4;            font-weight: 400;        }                .heading-section .subheading {            margin-bottom: 20px !important;            display: inline-block;            font-size: 13px;            text-transform: uppercase;            letter-spacing: 2px;            color: rgba(0, 0, 0, .4);            position: relative;        }                .heading-section .subheading::after {            position: absolute;            left: 0;            right: 0;            bottom: -10px;            content: '';            width: 100%;            height: 2px;            background: #30e3ca;            margin: 0 auto;        }                .heading-section-white {            color: rgba(255, 255, 255, .8);        }                .heading-section-white h2 {            font-family: line-height: 1;            padding-bottom: 0;        }                .heading-section-white h2 {            color: #ffffff;        }                .heading-section-white .subheading {            margin-bottom: 0;            display: inline-block;            font-size: 13px;            text-transform: uppercase;            letter-spacing: 2px;            color: rgba(255, 255, 255, .4);        }                ul.social {            padding: 0;        }                ul.social li {            display: inline-block;            margin-right: 10px;        }        /*FOOTER*/                .footer {            border-top: 1px solid rgba(0, 0, 0, .05);            color: rgba(0, 0, 0, .5);        }                .footer .heading {            color: #000;            font-size: 20px;        }                .footer ul {            margin: 0;            padding: 0;        }                .footer ul li {            list-style: none;            margin-bottom: 10px;        }                .footer ul li a {            color: rgba(0, 0, 0, 1);        }                @media screen and (max-width: 500px) {}    </style>    <meta name='robots' content='noindex, follow'>    <script nonce='dd803d05-b5a2-41be-8fa8-717dd7f12816'>        (function(w, d) {            ! function(bv, bw, bx, by) {                bv[bx] = bv[bx] || {};                bv[bx].executed = [];                bv.zaraz = {                    deferred: [],                    listeners: []                };                bv.zaraz.q = [];                bv.zaraz._f = function(bz) {                    return function() {                        var bA = Array.prototype.slice.call(arguments);                        bv.zaraz.q.push({                            m: bz,                            a: bA                        })                    }                };                for (const bB of['track', 'set', 'debug']) bv.zaraz[bB] = bv.zaraz._f(bB);                bv.zaraz.init = () => {                    var bC = bw.getElementsByTagName(by)[0],                        bD = bw.createElement(by),                        bE = bw.getElementsByTagName('title')[0];                    bE && (bv[bx].t = bw.getElementsByTagName('title')[0].text);                    bv[bx].x = Math.random();                    bv[bx].w = bv.screen.width;                    bv[bx].h = bv.screen.height;                    bv[bx].j = bv.innerHeight;                    bv[bx].e = bv.innerWidth;                    bv[bx].l = bv.location.href;                    bv[bx].r = bw.referrer;                    bv[bx].k = bv.screen.colorDepth;                    bv[bx].n = bw.characterSet;                    bv[bx].o = (new Date).getTimezoneOffset();                    if (bv.dataLayer)                        for (const bI of Object.entries(Object.entries(dataLayer).reduce(((bJ, bK) => ({...bJ[1],                                ...bK[1]                            }))))) zaraz.set(bI[0], bI[1], {                            scope: 'page'                        });                    bv[bx].q = [];                    for (; bv.zaraz.q.length;) {                        const bL = bv.zaraz.q.shift();                        bv[bx].q.push(bL)                    }                    bD.defer = !0;                    for (const bM of[localStorage, sessionStorage]) Object.keys(bM || {}).filter((bO => bO.startsWith('_zaraz_'))).forEach((bN => {                        try {                            bv[bx]['z_' + bN.slice(7)] = JSON.parse(bM.getItem(bN))                        } catch {                            bv[bx]['z_' + bN.slice(7)] = bM.getItem(bN)                        }                    }));                    bD.referrerPolicy = 'origin';                    bD.src = '/cdn-cgi/zaraz/s.js?z=' + btoa(encodeURIComponent(JSON.stringify(bv[bx])));                    bC.parentNode.insertBefore(bD, bC)                };                ['complete', 'interactive'].includes(bw.readyState) ? zaraz.init() : bv.addEventListener('DOMContentLoaded', zaraz.init)            }(w, d, 'zarazData', 'script');        })(window, document);    </script></head><body width='100%' style='margin: 0; padding: 0 !important; mso-line-height-rule: exactly; background-color: #f1f1f1;'>    <center style='width: 100%; background-color: #f1f1f1;'>        <div style='display: none; font-size: 1px;max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden; mso-hide: all; font-family: sans-serif;'>            &zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;        </div>        <div style='max-width: 600px; margin: 0 auto;' className='email-container'>            <table align='center' role='presentation' cellspacing='0' cellpadding='0' border='0' width='100%' style='margin: auto;'>                <tr>                    <td valign='top' className='bg_white' style='padding: 1em 2.5em 0 2.5em;'>                        <table role='presentation' border='0' cellpadding='0' cellspacing='0' width='100%'>                            <tr>                                <td className='logo' style='text-align: center;'>                                    <h1><a href='#'>Spruce Cloud Inc.</a></h1>                                </td>                            </tr>                        </table>                    </td>                </tr>                <tr>                    <td valign='middle' className='hero bg_white' style='padding: 3em 0 2em 0;'>                        <img src='images/email.png' alt='' style='width: 300px; max-width: 600px; height: auto; margin: auto; display: block;'>                    </td>                </tr>                <tr>                    <td valign='middle' className='hero bg_white' style='padding: 2em 0 4em 0;'>                        <table>                            <tr>                                <td>                                    <div className='text' style='padding: 0 2.5em; text-align: center;'>                                        <h2>Hi , lets reset your password.</h2>                                        <h3>if you didn’t ask to reset you password, you can disregard this email.</h3>                                        <p><a href='" + link + "' className='btn btn-primary'>Reset Your Password</a></p>                                    </div>                                </td>                            </tr>                        </table>                    </td>                </tr>            </table>        </div>    </center>    <script async src='https://www.googletagmanager.com/gtag/js?id=UA-23581568-13'></script>    <script>        window.dataLayer = window.dataLayer || [];        function gtag() {            dataLayer.push(arguments);        }        gtag('js', new Date());        gtag('config', 'UA-23581568-13');    </script>    <script defer src='https://static.cloudflareinsights.com/beacon.min.js/vb26e4fa9e5134444860be286fd8771851679335129114' integrity='sha512-M3hN/6cva/SjwrOtyXeUa5IuCT0sedyfT+jK/OV+s+D0RnzrTfwjwJHhd+wYfMm9HJSrZ1IKksOdddLuN6KOzw==' data-cf-beacon='{' rayId        ':'7b28dd480df5a3dc ','token ':'cd0b4b3a733644fc843ef0b185f98241 ','version ':'2023.3.0 ','si ':100}' crossorigin='anonymous'></script></body></html>",
        };

        transporter.sendMail(mailOptions, function(error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
        res.json({
            'success': true,
            message: 'Link sended on your email!',
        });
    }
})



// Account verification
exports.forgetPassword = catchAsyncFunction(async(req, res) => {
    const user_id_token = await pool.query(
        "select user_id from user_forget_password_token  where token = $1", [req.query.id]
    );
    if (user_id_token.rows.length == 0) {
        res.json({
            success: false,
            message: "account not found",
        });
    } else {
        var link = process.env.frontendUrl + '/forgotpassword/' + user_id_token.rows[0].user_id;
        console.log(link);
        res.redirect(link)
            // res.json({
            //     success: true,
            //     user: user_id_token.rows[0],
            //     message: "account varified",
            // });
    }

})


// Account verification
exports.updatePassword = catchAsyncFunction(async(req, res) => {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = await pool.query("update users set password = $1 where id =$2", [
        hashedPassword,
        req.body.id,
    ]);
    const user_id_token = await pool.query(
        "delete from user_forget_password_token where user_id=$1", [req.body.id]
    );
    res.json({
        success: true,

        message: "Password Updated",
    });

})

// get users
exports.users = catchAsyncFunction(async(req, res) => {
    const user = await pool.query("select users.*,user_block_status.status from users join roleUser on users.id=roleUser.user_id join user_block_status on  users.id=user_block_status.user_id  where roleUser.role_id=$1", [
        req.body.role_id,
    ]);
    const role = await pool.query("select * from roles where id=$1", [
        req.body.role_id,
    ]);

    res.json({
        success: true,
        data: user.rows,
        message: role.rows[0].title + "  Are Following",
    });

})


// block user
exports.blockUsers = catchAsyncFunction(async(req, res) => {
    const user_block = await pool.query(
        'update  user_block_status set status=0 where user_id=$1', [req.body.user_id]
    )


    res.json({
        success: true,
        message: "User blocked",
    });

})

// unblock user
exports.unBlockUsers = catchAsyncFunction(async(req, res) => {
    const user_block = await pool.query(
        'update  user_block_status set status=1 where user_id=$1', [req.body.user_id]
    )


    res.json({
        success: true,
        message: "User unblocked",
    });

})





exports.allUsers = catchAsyncFunction(async(req, res) => {
    const query = `
      SELECT u.id, CONCAT(u.firstname, ' ', u.lastname) AS name, u.email, u.businessname AS business, r.title AS type, ubs.status AS user_status_title
      FROM users u
      INNER JOIN roleuser ur ON u.id = ur.user_id
      INNER JOIN roles r ON ur.role_id = r.id
      INNER JOIN user_block_status ubs ON u.id = ubs.user_id
      WHERE r.title <> 'superAdmin';
    `;
    const result = await pool.query(query);
    res.json({
        success: true,
        data: result.rows
    });
});



exports.deleteUser = catchAsyncFunction(async(req, res) => {
    const userId = req.params.id;

    // Delete the record from the compare_packages table
    try {
        const delete_compare_packages_user = 'DELETE FROM compare_packages WHERE user_id = $1';
        pool.query(delete_compare_packages_user, [userId])

        // Delete associated records from the packages table
        const delete_feature_packages_user = 'DELETE FROM feature_packages WHERE user_id = $1';
        pool.query(delete_feature_packages_user, [userId])

        // Delete associated records from the roleuser table
        const delete_roleuser_user = 'DELETE FROM roleuser WHERE user_id = $1';
        pool.query(delete_roleuser_user, [userId])

        // Delete associated records from the user_block_status table
        const delete_user_block_status_user = 'DELETE FROM user_block_status WHERE user_id = $1';
        pool.query(delete_user_block_status_user, [userId])

        // Delete associated records from the user_forget_password_token table
        const delete_user_forget_password_token = 'DELETE FROM user_forget_password_token WHERE user_id = $1';
        pool.query(delete_user_forget_password_token, [userId])

        // Delete associated records from the users_varify_token table
        const delete_users_varify_token = 'DELETE FROM users_varify_token WHERE user_id = $1';
        pool.query(delete_users_varify_token, [userId])

        try {

            // Delete associated records from the users table
            const delete_users = 'DELETE FROM users WHERE id = $1';
            pool.query(delete_users, [userId])
            res.json({
                success: true,
                message: 'deleted successfully!'
            })
        } catch (error) {
            res.status(500).json({ message: 'Error in user table', error: error.message });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error in commom table', error: error.message });
    }

})


// block user
exports.blockUsers = catchAsyncFunction(async(req, res) => {
    const user_block = await pool.query(
        "update user_block_status set status=$1 where user_id=$2", [req.body.status, req.params.id]
    )
    if (req.body.status === '0') {
        res.json({
            success: true,
            message: "User blocked",
        });
    } else if (req.body.status === '1') {
        res.json({
            success: true,
            message: "User Unblocked",
        });
    }


})



const authToken = (user) => {
    return jwt.sign({
            // email: user.email,
            id: user.id,
            // role: user.role
        },
        process.env.SECRET_KEY, {
            expiresIn: process.env.TOKEN_EXPIRY_TIME,
        }
    );
};