const express= require('express')
const router = express.Router()
const Item = require('../Modules/Item')


const multer  = require('multer')


// const storage = multer.diskStorage({
//     destination: function(req, file, cb) {
//         cb(null, 'images');
//     },
//     filename: function(req, file, cb) {   
//         cb(null, uuidv4() + '-' + Date.now() + path.extname(file.originalname));
//     }
// });

// const fileFilter = (req, file, cb) => {
//     const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
//     if(allowedFileTypes.includes(file.mimetype)) {
//         cb(null, true);
//     } else {
//         cb(null, false);
//     }
// }

// let upload = multer({ storage, fileFilter });



// const storage = multer.diskStorage({
//     destination:(req, file, callback)=>{
//         callback(null,'./uploads')
//             // callback(null, path.join(__dirname, './uploads/'))
//     },
//     filename:(req, file, callback)=>{
//         // callback((null, new Date().getTime() + '_' + file.originalname))
//         callback((null, new Date().getTime() + '_' + file.originalname))


//     }
// })
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "public");
    },
    filename: (req, file, cb) => {
      const ext = file.mimetype.split("/")[1];
      cb(null, `files/admin-${file.fieldname}-${Date.now()}.${ext}`);
    },
  });

  

const upload =multer({storage:storage})


router.post('/createitem',
upload.single('picURL'),
async (req,res) => {
   try {
    const item = await Item.create({
        name: req.body.name,
        detail: req.body.detail,
        location: req.body.location,
        picURL: req.file.filename,
        like:req.body.like,
        price:req.body.price,


    })
    res.json(item)
} catch (error) {
    console.log('file not uploaded')
    console.log(error.message)
    return res.status(500).json('Internal server error')
}
})


// try {
//     const newFile = await Item.create({
//       picURL: req.file.filename,
//       name: req.body.name,
//       detail: req.body.detail,
//       location: req.body.location,

//     });
//     res.status(200).json({
//       status: "success",
//       message: "File created successfully!!",
//     });
//   } catch (error) {
//     res.json({
//       error,
//     });
//   }

//Route 2

router.get('/fectchitemall',
async (req,res)=>{
    try {
        const getitem = await Item.find({})
        res.json(getitem)
    } catch (error) {
        console.log(error.message)
        return res.status(500).json("internal server error")
        
    }
    
})

router.get('/fetchitem/:id',
async (req,res) =>{
    try {
        const serchitem = await Item.findById(req.params.id)
        if (!serchitem) {
            return res.status(400).json('not found')
        }
        // serchitem = await Item.find()
        res.json(serchitem);   
     } 
        
        catch (error) {
        console.log(error.message)
        return res.status(500).json('internal server error')
    }
}
)

//Route 3

router.delete('/deleteitem/:id',
async (req,res)=>{
    try {
        let itemdel = await Item.findById(req.params.id)

        if (!itemdel) {
            return res.status(400).json("not found")
        }
        itemdel = await Item.findByIdAndDelete(req.params.id)
        res.json({ "Success": "item has been deleted", itemdel: itemdel });
    } catch (error) {
        console.log(error.message)

return res.status(500).json('internal server error')
    }
}
)


//Route 4 

router.put('/updateitem/:id',
upload.single('picURL'),

async (req,res)=>{
    // const  {name, detail, location,picURL } = req.body;

    try {
      

        const newname = req.body.name;
        const newdetail = req.body.detail;
        const newlocation = req.body.location;
        const newprice = req.body.price;
        const newpicURL = req.file.filename;

        
        var updateitem = await Item.findById(req.params.id)
        if (!updateitem) {
            return res.status(400).json('not found')
        }
        updateitem = await Item.findByIdAndUpdate(req.params.id, {name: newname, detail: newdetail, location:newlocation,price: newprice, picURL:newpicURL})
        res.json({ updateitem });   
     } 
        
        catch (error) {
        console.log(error.message)
        return res.status(500).json("internal server error")
        
    }
})

// Route 4

// router.put('/updateitemlike/:id',
// async (req,res)=>{
//     // const  {name, detail, location,picURL } = req.body;

//     try {
      

//         const newlike = req.body.like;
                
//         var updateitemlike = await Item.findById(req.params.id)
//         if (!updateitemlike) {
//             return res.status(400).json('not found')
//         }
//         updateitemlike = await Item.findByIdAndUpdate(req.params.id, {like: newlike})
//         res.json({ updateitemlike });   
//      } 
        
//         catch (error) {
//         console.log(error.message)
//         return res.status(500).json("internal server error")
        
//     }
// })


router.put('/updateitemlike/:id',
async (req,res)=>{
    // const  {name, detail, location,picURL } = req.body;

    try {
      

        // const newlike = req.body.like;
                
        var updateitemlike = await Item.findById(req.params.id)
        if (!updateitemlike) {
            return res.status(400).json('not found')
        }
        updateitemlike = await Item.findByIdAndUpdate(req.params.id,   { $inc: { like: 1} })
        res.json({ updateitemlike });   
     } 
        
        catch (error) {
        console.log(error.message)
        return res.status(500).json("internal server error")
        
    }
})

//route 5 fetch likes

router.get('/fetchitemlike/:id',
async (req,res) =>{
    try {
        const serchitemlike = await Item.findById(req.params.id)
        if (!serchitemlike) {
            return res.status(400).json('not found')
        }
        // serchitem = await Item.find()
        res.json(serchitemlike.like);   
     } 
        
        catch (error) {
        console.log(error.message)
        return res.status(500).json('internal server error')
    }
}
)

module.exports = router;