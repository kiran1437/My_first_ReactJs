import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetails from './CommentDetails';
import ApprovalCard from './ApprovalCard'
const App = () => {
    return(
        <div className = "ui container comments">  
            <ApprovalCard>
                <CommentDetails 
                    author ="sam" 
                    timeAgo="today 4:25 PM" 
                    image={faker.image.avatar()}/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetails 
                    author ="abc" 
                    timeAgo="today 5:25 PM" 
                    image={faker.image.avatar()}/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetails 
                    author ="jane" 
                    timeAgo="today 6:25 PM" 
                    image={faker.image.avatar()}/>
           </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

