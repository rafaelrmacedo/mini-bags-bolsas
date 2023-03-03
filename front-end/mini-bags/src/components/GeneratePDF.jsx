function GeneratePDF(){

    const generate = document.getElementById("generate-pdf-btn");

    generate.addEventListener("click", (evt) => {
        const content = document.getElementById("content-container").innerHTML;

        //TO DO 
        //let style = 

        const win = window.open("", "", "height=700, width=600");

        win.document.write("<html><head>");
        win.document.write("<title>Mini Bags Bolsas</title></head>");
        win.document.write("<body>");
        win.document.write(content);
        win.document.write("</body> </html>");

        win.print();
    })
}

export default GeneratePDF