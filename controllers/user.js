let users = [
    {id: 1, nama:"Febri", Email:"febriyanoka08@gmail"},
    {id: 2, nama:"Oka", Email:"oka08@gmail"},
]

module.exports ={
    index : (req, res) => {
        if(users.length > 0){
            res.json({
                status: true,
                data: users,
                method:req.method,
                url: req.url
            })
        }else{
            res.json({
                status: false,
                messege: "Data Masih Kosong"
            })
        }
      },
      store: (req, res) => {
        users.push(req.body)
        res.json({
            status: true,
            data: users,
            method:req.method,
            url: req.url,
            messege: "Data berhasil ditambahkan"
        })
      
      },
      update: (req, res) => {
        const id = req.params.id
        users.filter(user => {
            if(user.id == id){
                user.nama= req.body.nama
                user.email= req.body.email
                return user
            }
        })
        res.json({
            status: true,
            data: users,
            method:req.method,
            url: req.url,
            messege: "Data berhasil diubah"
        })
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