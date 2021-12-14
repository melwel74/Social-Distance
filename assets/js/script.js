// const express = require('express');
// const path = require('path');
// const fileupload = require('express-fileupload');
//stuff in the server
// const exphbs = require('express-handlebars');
// const hbs = exphbs.create({});
// const path = require('path')

// const app = express();
// app.use(express.static(initial_path));
// app.use(fileupload());

// app.get('/', (req, res) => {
//     res.sendFile(path.join(initial_path, "index.html"));
// })

//upload link
// app.post('/upload', (req, res)=>{
//     let file= req.file.image;
//     let date = new Date();
//     // image name
//     let imagename = date.getDate() + date.getTime() + file.name;
//     //image upload path 
//     let path = 'public/uploads/' + imagename;
//     //create upload
//     file.mv(path,(err,result)=>{
//         if(err){
//             throw err;
//         }else{
//             //our image upload path
//             res.json('uploads/${imagename}')
//         }
//     })
// })
// ser/js
// app.get("/:blog",(req,res) =>{
//     res.sendFile(path.join(initial_path, "blog.html"));
// })
// app.use((req,res)=>{
//     res.json("404");
// })
// app.listen("3000",()=>{
//     console.log('listening.....');
// })
//naming constants move to the begin and eDJs
//requirements
// Your name is required
const blogTitleField = document.querySelector('.title');
const articleField = document.querySelector('.article');

//banner eD
const bannerImage = document.querySelector('.title');
const banner = document.querySelector(".banner");
var bannerPath;

const publishBtn = document.querySelector('.publish-btn');
const uploadInput = document.querySelector('#image-upload');

bannerImage.addEventListener('change', () => {
    uploadImage(bannerImage, "banner");
})
const uploadImage = (uploadFile, uploadType) => {
    const [file] = uploadFile.files;
    if (file && file.type.includes("image")) {
        const formdata = new FormData();
        formdata.append('image', file);

        fetch('/upload', {
            method: 'post',
            body: formdata
        }).then(res => res.json())
            .then(data => {
                bannerPath = '${location.origin}/${data}';
                banner.style.backgroundImage = 'url("${bannerPath}")';
            })
    } else {
        alert("upload Image only");
    }
}

const addImage = (imagepath, alt) => {
    let curPos = articleField.selectionStart;
    let textToInsert = '\r![${alt}](${imagepath})\r';
    articleField.value = articleField.value.slice(0, curPos) + textToInsert +
        articleField.value.slice()
}
// eDjs
let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];


//eD.js
publishBtn.addEventListener('click', () => {
    if (articleField.value.length && blogTitleField.value.length) {
        //generating id
        let letters = 'abcdefghijklmnoqrstuvwxyz';
        let blogTitle = blogTitleField.value.split(" ").join("-");
        let id = '';
        for (let i = 0; i < 4; i++) {
            id += letters[Math.floor(Math.random() * letters.length)];
        }
        //setting up docName
        let docName = '${blogTitle}-${id}';
        let date = new Date(); //for published at info

        // access fs with db variable;
        db.collection("blogs").doc(docName).set({
            title: blogTitleField.value,
            article: articleField.value,
            bannerImage: bannerpath,
            publishedAt: '${date.getDate()} ${months[date.getMonth()]} ${date.get.getFullYear()}'
        })
            .then(() => {
                location.href = '/${docName}';
            })
            .catch((err) => {
                console.error(err);
            })
    }
});
// // bgjs

let blogId = decodeURI(location.pathname.split("/").pop());

let docRef = db.collection("blogs").doc(blogId);

docRef.get().then((doc) => {
    if (doc.exists) {
        setupBlog(doc.data());
    } else {
        location.replace("/");
    }
})
const setupBlog = (data => {
    const banner = document.querySelector('.banner');
    const blogTitle = document.querySelector('.title');
    const titleTag = document.querySelector('title');
    const publish = document.querySelector('.published');

    banner.style.backgroundImage = 'url(${data.bannerImage})';

    titleTag.innerHTML += blogTitle.innerHTML = data.titleTag;
    publish.innerHTML += data.publishedAt;

    const article = document.querySelector('.article');
    addArticle(article, data.article);
})
const addArticle = (ele, data) => {
    data = data.split("\n").filter(item => item.length);
    //console.log(data)
    console.log(data);
    data.forEach(item => {11
        //check for heading
        if (item[0] == '#') {
            let hCount = 0;
            let i = 0;
            while (item[i] == '#') {
                hCount++;
                i++;
            }
            let tag = 'h${hCount}';
            ele.innerHTML += '<${tag}>${item.slice(hCount,item.length)}</${tag}'
        }
//         //checking for image format
//         //    else if(item[0]=="!" && item[1]==="["){
//         //        let seperator;
//         //        for (let i =0; i<item.length;i++){
//         //            if(item[i]=="]" && item[i+1]=="(" && item[item.length -1]==
//         //            ")"){
//         //                seperator = i;
//         //            }
//         //            //extract images "alt" and "src"
//         //            let alt =item.slice(2,seperator);
//         //            let src = item.slice(seperator+2,item.lenght-1);
//         //            ele.innerHTML +=
//         //            <img src = "${src}" alt="${alt}"class="article-image">

//         //        }
        else {
            ele.innerHTML += '<p>${item}</p>';
        }
    })
}






// // Check to see if the blog is empty
//  var blogpostText = document.querySelector("#text");

// if (document.getElementById("#text").value == null)
// {
//     alert("There is nothing in the text area")
//     document.getElementById("field").style.display ="none";

// }
