const  pagination = (req,res,next) => {
    const { page = 1, limit = 50 } = req.query
    req.pagination = {
        skip: parseInt(page, 10) * (page - 1),
        limit:parseInt(limit,10)
    }
    next()
}
export default pagination