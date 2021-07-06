$(()=>{
    let list = []
    let count = 0
    $("#form").on("submit",()=>{
        const x = $("input[name=menu_img]")
        x.each(function (i,e) {
            list.push(!!e.value)
            count++
        })
        $("#test").val(list)
        $("#count").val(count)
        return true
    })
})