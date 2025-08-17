import { feed } from '../data/feed.js';
import { addLikeEventListener } from './utils/likesSystem.js';
import { addFollowEventListener } from './utils/followSystem.js';
import { displayComments } from './utils/commentsSystem.js';
import { addInputBarEventListener } from './utils/commentsSystem.js';

export function loadMainPagePosts() {

  let posts = ``;
  
  feed.forEach(postInfo => {
  
    posts += `
      <div class="posts">
        
        <div class="post-just-one">
  
          <div class="post-top-section">
  
            <div class="left-post-top-section">
  
              <img src=${postInfo.profilePicture} class="Profile-post-top-section">
  
              <img src="Images/aro-rgb.png" class="rgb-ring-post-top-section">
  
              <div class="Username-post-top-section">
  
                <span style="margin-right: 2px;">${postInfo.userName}</span> • 
                <span style="color: gray; margin-left: 2px; margin-right: 2px;">${postInfo.publicationAge}</span> • 
                <span class="Follow-button-post-top-section Follow-button-post-top-section-${postInfo.ID}">${postInfo.isFollowing ? "Follow" : "Following"}</span>
  
              </div>
  
            </div>
  
  
            <img src="Icons/more-icon.png">
  
  
          </div>
  
  
          <div class="post-middle-section"><img src=${postInfo.publicationImage} class="post-pic-middle-section"></div>
  
  
          <div class="post-bottom-section">
  
            <div class="icons-post-bottom-section">
  
              <div>
  
                <img src=${postInfo.likeIcon} class="left-icons-post-bottom-section js-likes-post-bottom-section-${postInfo.ID}">
                <img src="Icons/comment.png" class="left-icons-post-bottom-section">
                <img src="Icons/Messages.png" class="left-icons-post-bottom-section">
  
              </div>
  
              <div class="right-icons-post-bottom-section"><img src="Icons/save.png" alt=""></div>
  
              
              
            </div>
            
            
            <div class="likes-post-bottom-section">${postInfo.likes} likes</div>
            
            <div class="text-post-bottom-section"><strong>${postInfo.userName}</strong> ${postInfo.userComment}</div>
  
            <div class="views-post-bottom-section">View all ${postInfo.comments} comments</div>

            <div class="yourComments" style="margin: 5px;">${displayComments(postInfo.ID)}</div>
  
            <div class="InputAndEmoji">
  
              <input type="text" placeholder="Add a comment..." class="input-post-bottom-section input-post-bottom-section-${postInfo.ID}">
  
              <img src="Icons/emoji.png" class="emoji-post-bottom-section">
  
            </div>
            
            
  
          </div>
  
  
  
        </div>
  
  
      </div>
    `


  
  })


  
  document.querySelector('.js-posts').innerHTML = posts;

  addLikeEventListener();
  
  addFollowEventListener();

  addInputBarEventListener();

}

loadMainPagePosts();


