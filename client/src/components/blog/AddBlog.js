import React from "react";
import { useReducer } from "react";
import { useState } from "react";
import { useEffect } from "react";

// create useReducer for changing values
const reducer = (state, action) => {
    console.log(action, 'this is the action');
    switch (action.type) {
        case 'addID':
            console.log('Logged if the editName action is being dispatched');
            //it updates the name to the input value
            return { ...state, id: action.payload };

        case 'addFirstName':
            return { ...state, authorfirstname: action.payload };

        case 'addLastName':
            return { ...state, authorlastname: action.payload };

        case 'addText':
            return { ...state, text: action.payload };
        case 'addImage':
            return { ...state, image: action.payload };
        case 'clearForm':
            return { id: '', authorfirstname: '', authorlastname:'', text:'', image: '' };
        default:
            return state;
    }
};

const AddBlog = () => {

    const [posts, setPosts] = useState([]);

    const getPosts = async () => {
        const response = await fetch(
            `http://localhost:6444/posts`
        );
        const postt = await response.json();
        console.log(postt);
        setPosts(postt);
    }

    useEffect(() => {
        getPosts();
    }, []);

    const initialState = {
        id: "", authorfirstname: '', authorlastname:'', text:'', image: ''
    };

    const [state, dispatch] = useReducer(reducer, initialState);
    const handleAddPost = async (e) => {
        e.preventDefault();

        const newPost = {
            id: state.id, authorfirstname: state.authorfirstname, authorlastname: state.authorlastname, text: state.text, image: state.image
        }

        const response = await fetch('http://localhost:6444/posts', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newPost)
        });
        const content = await response.json();
        setPosts([...posts, content])
        dispatch({ type: 'clearForm' });
    }
    return (
        <>
            <div className="addPost">
                <header>Add a new Post</header>

                <form onSubmit={handleAddPost}>
                    <fieldset>
                        <label>ID: </label>
                        <input type="number" value={state.id} onChange={(e) => dispatch({ type: 'addID', payload: e.target.value })} />
                        <br></br>
                        <label> First Name: </label>
                        <input type="text" value={state.authorfirstname} onChange={(e) => dispatch({ type: 'addFirstName', payload: e.target.value })} />
                        <br></br>
                        <label> Last Name: </label>
                        <input type="text" value={state.authorlastname} onChange={(e) => dispatch({ type: 'addLastName', payload: e.target.value })} />
                        <br></br>
                        <label>Text: </label>
                        <input type="text" value={state.text} onChange={(e) => dispatch({ type: 'addText', payload: e.target.value })} />
                        <br></br>
                        <label>Image: </label>
                        <input type="text" value={state.image} onChange={(e) => dispatch({ type: 'addImage', payload: e.target.value })} />
                    </fieldset>
                    <input type="submit" />
                </form>
            </div>
        </>
    )
}

export default AddBlog;