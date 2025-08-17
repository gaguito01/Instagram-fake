import { feed } from '../../data/feed.js';
import { loadMainPagePosts } from '../mainPage.js';
import { addFollowEventListener } from './followSystem.js';

export function addLikeEventListener () {

  feed.forEach(postInfo => {

    document.querySelector(`.js-likes-post-bottom-section-${postInfo.ID}`).addEventListener('click', () => {
    
      addLike(postInfo.ID);
      
    })

  })


}


export function addLike (id) {

  feed.forEach(post => {

    if (post.ID === id && !post.isLiked ) {

      post.likes += 1;
      post.likeIcon = 'Icons/redHeart.png'; // Assuming this is the icon for a liked post
      post.isLiked = true; // Set isLiked to true when the post is liked

    } else if (post.ID === id && post.isLiked) {

      post.likes -= 1;
      post.likeIcon = 'Icons/Notifications.png'; // Assuming this is the icon for a liked post
      post.isLiked = false; // Set isLiked to true when the post is liked

    }
    
  });
  
  loadMainPagePosts(); // Refresh the posts to reflect the new like count and icon

  localStorage.setItem('feed', JSON.stringify(feed));

}