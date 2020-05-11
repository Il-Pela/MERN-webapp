import React, { Fragment, useState } from 'react';
import axios from 'axios';

import Message from './message';
import Progress from './progress';

const FileUpload = () => {

    const [file, setFile] = useState('');
    const [fileName, setFileName] = useState('Choose File');
    const [uploadedFile, setUploadedFile] = useState({});
    const [message, setMessage] = useState('');
    const [uploadPercentage, setUploadPercentage] = useState(0);

    const onChange = e => {
        setFile(e.target.files[0]);
        console.log(e.target.files[0].name);
        setFileName(e.target.files[0].name);
        setUploadedFile({});
    }

    const onSubmit = async e => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('file', file);

        try {
            const res = await axios.post('http://localhost:4000/materials/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },

                onUploadProgress: progressEvent => {
                    setUploadPercentage(parseInt(Math.round((progressEvent.loaded * 100) / progressEvent.total)));

                    //clear percentage afret 5 sec
                    setTimeout(() => setUploadPercentage(0), 5000);
                }


            });

            const { fileName, filePath } = res.data;
            setUploadedFile({ fileName, filePath });

            setMessage('File Uploaded');

        } catch (err) {
            if (err.response.status === 500) {
                setMessage('File missing');
            } else {
                setMessage(err.response.data.msg);
            }
        }

    }

    return (
        <Fragment>
            {message ? <Message msg={message} /> : null}
            <form onSubmit={onSubmit}>
                <div className="custom-file mb-4">
                    <input type="file"
                        className="custom-file-input"
                        id="customFile"
                        onChange={onChange} />
                    <label className="custom-file-label" htmlFor="customFile">
                        {fileName}
                    </label>
                </div>

                <Progress percentage={uploadPercentage} />

                <input type="submit" value="Upload" className="btn btn-primary btn-block mt-4" />

            </form>
            {uploadedFile ?
                <div>
                    <object data={uploadedFile.filePath}
                        type="application/pdf"
                        width="100%"
                        height="700"
                        frameBorder="0"
                        scrolling="auto"
                        style={{marginTop: 20}}>
                    </object>
                </div> : null}
        </Fragment>
    );
}

export default FileUpload