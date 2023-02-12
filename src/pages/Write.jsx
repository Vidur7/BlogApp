import React, { useState } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Write = () => {
    const [value, setValue] = useState('');

    return(
        <div className="add">
            <div className="content">
                <input type="text" placeholder="Title" />
                <div className="editorContainer">
                <ReactQuill className="editor" theme="snow" value={value} onChange={setValue} />;
                </div>
            </div>
            <div className="menu">
                <div className="item">
                    <h1>Publish</h1>
                    <span>
                        <b>Status: </b> Draft
                    </span>
                    <span>
                        <b>Visibility: </b> Public
                    </span>
                    <input style={{display:"none"}} type="file" name="" id="file" />
                    <label htmlFor="item">Upload Image</label>
                    <div className="buttons">
                        <button>Save as a Draft</button>
                        <button>Update  </button>
                    </div>
                </div>
                <div className="item">
                    <h1>Category</h1>
                    <input type="radio" name="cat" value="art" id="art" />
                    <label htmlFor="art">ART</label>
                    <input type="radio" name="cat" value="science" id="science" />
                    <label htmlFor="science">SCIENCE</label>
                    <input type="radio" name="cat" value="technology" id="technology" />
                    <label htmlFor="technology">TECHNOLOGY</label>
                    <input type="radio" name="cat" value="cinema" id="cinema" />
                    <label htmlFor="cinema">CINEMA</label>
                    <input type="radio" name="cat" value="design" id="design" />
                    <label htmlFor="design">DESIGN</label>
                    <input type="radio" name="cat" value="food" id="food" />
                    <label htmlFor="food">FOOD</label>
                </div>
            </div>
        </div>
    )
}

export default Write