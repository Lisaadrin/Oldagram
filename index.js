const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]
let mainSection = document.getElementById("main")
function oldagram() {
for (let i=0; i<posts.length; i++) {
    mainSection.innerHTML +=  `
        <article class="section">
            <section class="upper">
                <img class="avatar poster" src="${posts[i].avatar}">
                <div class="user-data">
                    <h1 class="user-name">
                        ${posts[i].name}
                    </h1>
                    <p class="location">
                        ${posts[i].location}
                    </p>
                </div>
            </section>
            <img class="main-img" src="${posts[i].post}">
            <section class="lower">
                <div class="icons">
                    <img  class="icon like" src="images/icon-heart.png">
                    <img class="icon" src="images/icon-comment.png">
                    <img class="icon" src="images/icon-dm.png">
                </div>      
                <h2 class="total-likes likes">${posts[i].likes} likes</h2>
                <h3 class="comments">
                    <span class="commenter">${posts[i].username}</span>
                   ${posts[i].comment}
                </h3>
            </section>
        </article>
        `
            
}
}
oldagram()

const likes = document.getElementsByClassName("like")
const totalLikes = document.getElementsByClassName("total-likes")
 
for (let i = 0; i < likes.length; i++) {
    likes[i].addEventListener("click", function () {
        posts[i].likes += 1
        totalLikes[i].textContent = `${posts[i].likes} likes`
    })
}