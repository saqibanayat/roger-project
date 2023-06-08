"use strict"

const pool = require("../DBconnection");
const catchAsyncFunction = require('../middlewares/catchAsyncFun');
const fs = require("fs");

// add attribute
exports.addAttribute = catchAsyncFunction(async(req, res) => {


    const existRole = await pool.query('select * from attributes where name = $1', [req.body.title])
        // console.log(existRole.rows[0].title);
    if (existRole.rows[0]) {
        res.json({
            'success': false,
            message: 'this title is already exist'
        })
    } else {
        console.log(req.body.title);
        const user = await pool.query(
            'INSERT INTO attributes (name) VALUES ($1) RETURNING *  ', [req.body.title]
        )
        res.json({
            success: true,
            message: "attribute added successfully!"
        })
    }
})


// get attributes
exports.getAttributes = catchAsyncFunction(async(req, res) => {
    const user = await pool.query(
        'select * from attributes'
    )

    res.json({
        success: true,
        attributes: user.rows,
        message: "attributes  fetched successfully!"
    })
})



//  add package
exports.addPackage = catchAsyncFunction(async(req, res) => {
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

    } else {
        filename = null;
    }
    // res.json(newimg);
    const user = await pool.query(
        'INSERT INTO packages (title,details,price,added_by,added_for,image) VALUES ($1,$2,$3,$4,$5,$6) RETURNING *  ', [req.body.title, req.body.details, req.body.price, req.body.added_by, req.body.added_for, filename]
    )
    req.body.attributes.forEach(async(element) => {
        var i = 0;
        const user2 = await pool.query(
                // insert into rolePermission (role_id,permission_id) values(1,1);
                'INSERT INTO package_attribute (attribute_id,package_id,des_pkg) VALUES ($1,$2,$3) RETURNING *  ', [element.attribute_id, user.rows[0].id, element.value]
            )
            // console.log(element);

        i++;
    });
    res.json({
        success: true,
        message: "package added successfully!"
    })

})


//  get  packages
exports.getPackages = catchAsyncFunction(async(req, res) => {

    var page = 0;
    const length = await pool.query(
        'select * from packages'
    )
    var pagelength = Math.ceil(length.rows.length / 20);

    var previousPage;
    var curentPage;
    var nextPage;
    if (!req.query.page) {
        page = 0;
        curentPage = process.env.apiUrl + '/packages/get-packages?page=1';
        if (pagelength > 1) {
            nextPage = process.env.apiUrl + '/packages/get-packages?page=2'
        } else {
            nextPage = null
        }
    } else {
        page = req.query.page - 1;
        console.log(page);
        if (page == 0) {
            previousPage = null;
            curentPage = process.env.apiUrl + '/packages/get-packages?page=1';
            nextPage = process.env.apiUrl + '/packages/get-packages?page=2';
        } else if (pagelength == req.query.page) {
            previousPage = process.env.apiUrl + '/packages/get-packages?page=' + page;
            curentPage = process.env.apiUrl + '/packages/get-packages?page=' + req.query.page;

        } else {
            previousPage = process.env.apiUrl + '/packages/get-packages?page=' + page;

            curentPage = process.env.apiUrl + '/packages/get-packages?page=' + req.query.page;

            nextPage = process.env.apiUrl + '/packages/get-packages?page=' + (page + 2);
        }
    }

    const user = await pool.query(
        'select * from packages limit 20 offset 20* $1', [page]
    )
    res.json({
        success: true,
        packages: user.rows,
        page: {
            totalPages: pagelength,
            previousPage: previousPage,
            curentPage: curentPage,
            nextPage: nextPage,
        },
        message: "package fetched successfully!"
    })

})


//  get  package details
exports.getPackageDetails = catchAsyncFunction(async(req, res) => {

    const user = await pool.query(
        'select * from packages where id= $1', [req.body.package_id]

    )
    const attributes = await pool.query(
        'select attributes.name,attributes.id attributeId,package_attribute.id, package_attribute.des_pkg as value  from package_attribute join attributes on package_attribute.attribute_id=attributes.id where package_attribute.package_id=$1', [req.body.package_id]

    )

    res.json({
        success: true,
        packages: user.rows,
        attributes: attributes.rows,
        message: "package fetched successfully!"
    })

})


//  get  packages from attribute name
exports.getPackagesFromAttribute = catchAsyncFunction(async(req, res) => {

    const user = await pool.query(
        'select packages.* from package_attribute join attributes on package_attribute.attribute_id = attributes.id join packages on package_attribute.package_id = packages.id where attributes.name LIKE $1 ', [req.body.attribute]
    )


    res.json({
        success: true,
        packages: user.rows,
        message: "package fetched successfully!"
    })

})



//  get  packages from attribute id
exports.getPackagesFromAttributeId = catchAsyncFunction(async(req, res) => {
    const user = [];
    var max = req.body.attribute_id.length;
    // console.log(max);
    for (let j = 0; j < max; j++) {
        const user1 = await pool.query(
            'select packages.* from package_attribute join attributes on package_attribute.attribute_id = attributes.id join packages on package_attribute.package_id = packages.id where attributes.id = $1 ', [req.body.attribute_id[j]['attribute_id']])
        console.log(user1.rows);
        user[j] = user1.rows
    }


    res.json({
        success: true,
        packages: user,
        message: "package fetched successfully!"
    })

})

//  add  packages for compare
exports.addPackagesToCompare = catchAsyncFunction(async(req, res) => {

    const user = await pool.query(
        'INSERT INTO compare_packages (user_id,package_id) VALUES ($1,$2) RETURNING *  ', [req.body.user_id, req.body.package_id]
    )


    res.json({
        success: true,
        packages: user.rows,
        message: "package added to compare successfully!"
    })

})


//  get  packages for compare
exports.getCompareItems = catchAsyncFunction(async(req, res) => {
    const user = [];
    var max = req.body.package_id.length;
    for (let j = 0; j < max; j++) {
        const user1 = await pool.query(
            'select packages.* from  packages where id =$1', [req.body.package_id[j]])
        user[j] = user1.rows
    }
    for (let i = 0; i < user.length; i++) {
        const dataattr = await pool.query(
                'select attributes.name,attributes.id,package_attribute.des_pkg as value from package_attribute join attributes on package_attribute.attribute_id=attributes.id where package_attribute.package_id=$1', [user[i][0].id]

            )
            // console.log(dataattr.rows);
        user[i][0]['attributes'] = dataattr.rows
            // console.log(user[i]['attributes']);

    }



    res.json({
        success: true,
        packages: user,
        message: "packages for  compare !"
    })

})




//  add  custom page 
exports.addCustomPage = catchAsyncFunction(async(req, res) => {

    const user = await pool.query(
        'INSERT INTO custom_pages (title,details,status) VALUES ($1,$2,$3)', [req.body.title, req.body.details, true]
    )



    res.json({
        success: true,
        message: "custom page added successfully!"
    })

})


//  get  custom page 
exports.getCustomPage = catchAsyncFunction(async(req, res) => {

    const user = await pool.query(
        'select * from  custom_pages'
    )



    res.json({
        success: true,
        packages: user.rows,
        message: "custom page fetched successfully!"
    })

})



//  get  feature packages 
exports.getCustomPage = catchAsyncFunction(async(req, res) => {

    const user = await pool.query(
        'select * from  feature_packages'
    )



    res.json({
        success: true,
        packages: user.rows,
        message: "feature packages fetched successfully!"
    })

})



//  add  packages for make it feature packages
exports.addPackagesTofeature = catchAsyncFunction(async(req, res) => {

    const user = await pool.query(
        'INSERT INTO feature_packages (user_id,package_id) VALUES ($1,$2) RETURNING *  ', [req.body.user_id, req.body.package_id]
    )


    res.json({
        success: true,
        packages: user.rows,
        message: "package added to feature list successfully!"
    })

})





//  get feature packages 
exports.getFeaturePackages = catchAsyncFunction(async(req, res) => {
    const package_ids = await pool.query(
        'select package_id from  feature_packages where user_id =$1', [req.body.user_id]
    )
    console.log(package_ids.rows);
    const user = [];
    var max = package_ids.rows.length;
    for (let j = 0; j < max; j++) {
        const user1 = await pool.query(
            'select packages.* from  packages where id =$1', [package_ids.rows[j]['package_id']]
        )
        user[j] = user1.rows
    }
    for (let i = 0; i < user.length; i++) {
        const dataattr = await pool.query(
                'select attributes.name,attributes.id from package_attribute join attributes on package_attribute.attribute_id=attributes.id where package_attribute.package_id=$1', [user[i][0].id]

            )
            // console.log(dataattr.rows);
        user[i][0]['attributes'] = dataattr.rows
            // console.log(user[i]['attributes']);

    }



    res.json({
        success: true,
        packages: user,
        message: "Feature Packages !"
    })

})


//get package for search items
exports.getPackageForSearch = catchAsyncFunction(async(req, res) => {


    const pkg = await pool.query(
        'select * from packages'

    )

    res.json({
        success: true,
        packages: pkg.rows,
        message: "package fetched successfully!"
    })
})

exports.getCurrentUserPackages = catchAsyncFunction(async(req, res) => {


    const currentUser = await pool.query(
        'select * from packages where added_by = $1', [req.body.currentUserId]

    )

    res.json({
        success: true,
        packages: currentUser.rows,
        message: "package fetched successfully!"
    })
})


exports.deletePackage = catchAsyncFunction(async(req, res) => {

    const packageId = req.params.id;

    // Delete the record from the package_attribute   table
    const deletePackageAttributeQuery = 'DELETE FROM package_attribute WHERE package_id = $1';

    pool.query(deletePackageAttributeQuery, [packageId], (err, result) => {
        if (err) {
            console.error('Error deleting package attributes :', err);
            res.status(500).send('Error deleting package');
        } else {
            // Delete associated records from the packages table
            const deletePackagesQuery = 'DELETE FROM packages WHERE id = $1';
            pool.query(deletePackagesQuery, [packageId], (err, result) => {
                if (err) {
                    console.error('Error deleting package attributes:', err);
                    res.status(500).send('Error deleting package ');
                } else {
                    res.json({
                        success: true,

                        message: "package delete successfully!"
                    })
                }
            });
        }


    })
})


// edit package
exports.editPackage = catchAsyncFunction(async(req, res) => {
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
            'select image from packages where id = $1', [req.body.package_id]
        )
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
        filename = null
    }

    // console.log(req.body);

    const user = await pool.query(
        'update packages set title=$1, details=$2, price=$3, added_by=$4,image=$6  where id = $5 RETURNING *  ', [
            req.body.title,
            req.body.details,
            req.body.price,
            req.body.added_by,
            req.body.package_id,
            filename
        ]
    )

    // console.log(req.body.package_id);
    const deletattributes = await pool.query('delete from package_attribute where package_id =$1', [req.body.package_id])
    req.body.attributes.forEach(async(element) => {
        var i = 0;
        const user2 = await pool.query(
            'INSERT INTO package_attribute (attribute_id,package_id,des_pkg) VALUES ($1,$2,$3)'
            // , ['2', '30', 'sdsd']
            , [element.attribute_id,
                req.body.package_id,
                element.value
            ]
        )


        i++;
    });
    res.json({
        success: true,
        message: "package edited  successfully!"
    })

})