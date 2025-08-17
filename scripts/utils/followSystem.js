import { feed } from '../../data/feed.js';
import { loadMainPagePosts } from '../mainPage.js';
//import { addLikeEventListener } from './likesSystem.js';

export function addFollowEventListener () {

  feed.forEach(postInfo => {

    document.querySelector(`.Follow-button-post-top-section-${postInfo.ID}`).addEventListener('click', () => {
    
       toggleFollow(postInfo.ID);
      
    })

  })


}

function toggleFollow (id) {

  feed.forEach(post => {

    if (post.ID === id) {

      if (post.isFollowing) {

        post.isFollowing = false;

      } else {

        post.isFollowing = true;

      }


    }


  })

  loadMainPagePosts(); // Refresh the posts to reflect the new follow status

  localStorage.setItem('feed', JSON.stringify(feed));

}

