const User = require('../models/User')

module.exports ={
    index : async (req, res) => {
      try {
          const users = await User.find()
          if(users.length > 0){
            res.status(200).json({
                status: true,
                data: users,
                method: req.method,
                url: req.url
            })
            
          }else{
              res.json({
                  status: false,
                  message: "Data Masih Kosong"
              })
          }
         
      } catch (error) {
          res.status(400).json({sucess: false})
        
      }
       
      },
      store: async (req, res) => {
        try {
            const user = await User.create(req.body)
            res.status(200).json({
                status: true,
                data: user,
                method:req.method,
                url: req.url,
                messege: "Data berhasil ditambahkan"
            })
        } catch (error) {
            res.status(400).json({sucess: false, error: error.message})
        }

      },
      update: async (req, res) => {
        try {
            const user =await User.findByIdAndUpdate(req.params.id, req.body, {
                new : true,
                runValidators: true
            })
            res.json({
                status: true,
                data: user,
                method:req.method,
                url: req.url,
                messege: "Data berhasil diubah"
            })
        } catch (error) {
            res.status(400).json({sucess: false, error: error.message})
        }
        const id = req.params.id
       
       
      },
      delete: (req, res) => {
        const id = req.params.id
        users = users.filter(user => user.id != id)
    
        res.json({
            status: true,
            data: users,
            method:req.method,
            url: req.url,
            messege: "Data berhasil dihapus"
        })
      }
}