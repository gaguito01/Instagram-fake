import { feed } from "../../data/feed.js";
import { loadMainPagePosts } from "../mainPage.js";

export function addInputBarEventListener () {

  feed.forEach(postInfo => {

    document.querySelector(`.input-post-bottom-section-${postInfo.ID}`).addEventListener('keydown', () => {

        if (event.key === 'Enter') {

            postInfo.yourComments.push(document.querySelector(`.input-post-bottom-section-${postInfo.ID}`).value);

            document.querySelector(`.input-post-bottom-section-${postInfo.ID}`).value = '';

            loadMainPagePosts();

            localStorage.setItem('feed', JSON.stringify(feed));

        }
    
      
    })

  })


}

export function displayComments(ID) {

    let comments = ``;

    feed.forEach(postInfo => {

        if (postInfo.ID === ID ) {

            console.log(postInfo.yourComments);

            postInfo.yourComments.forEach(comment => {

                comments += `<div>${comment}</div>`;

            })

        }

    });

    return comments;
}
