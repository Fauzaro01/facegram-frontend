import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

function CreatePost() {
const [dataForm, setDataForm] = useState({
        caption: '',
        attachments: ''
    })
const navigate = useNavigate();

    async function sendDataForm() {
        await axios
          .post(
            "http://localhost:8000/api/v1/posts/",
            {
              caption: dataForm.caption,
              attachments: dataForm.attachments,
            },
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
                "Content-Type": "multipart/form-data",
              },
            }
          )
          .then((res) => {
            console.log(res.data);
            navigate('/dashboard');
          });
    }

    return <div className="container h-75 d-flex align-items-center">
        <div className="mx-auto">
            <div className="card">
                <div className="card-header">Tambah Postingan</div>
                <div className="card-body">
                    <div className="input-group mb-3">
                        <span className="input-group-text">Caption</span>
                        <input type="text" className="form-control" name="caption" onChange={(e) => setDataForm({...dataForm, [e.target.name] : e.target.value})}/>
                    </div>
                    <div className="input-group mb-3">
                        <label htmlFor="MultipleFile" className="form-label me-2">Masukan Gambar</label>
                        <input type="file" name="attachments" id="MultipleFile" className="form-control" multiple onChange={(e) => setDataForm({...dataForm, [e.target.name] : e.target.files[0]})}/>
                    </div>
                    <div className="d-flex justify-content-center">
                        <button className="btn btn-sm btn-outline-primary" onClick={sendDataForm}>Kirim</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default CreatePost