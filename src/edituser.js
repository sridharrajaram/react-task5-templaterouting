import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import UserContext from './usercontext';

function EditUser(props) {
    console.log(props.match.params.id);


    const [userName, setUserName] = useState("");
    const [position, setPosition] = useState("");
    const [office, setOffice] = useState("");
    const [age, setAge] = useState("");
    const [startDate, setStartDate] = useState("");
    const [salary, setSalary] = useState("");

    const userContext = useContext(UserContext);
    const history = useHistory(); //calling useHistory function for redirection to other component

    useEffect(()=>{
        //this code will executed when it entered into this component
        //we have user id, get user data by id and populate in form

        let userData = userContext.userList[props.match.params.id-1];
        setUserName(userData.userName);
        setPosition(userData.position);
        setOffice(userData.office);
        setAge(userData.age);
        setStartDate(userData.startDate);
        setSalary(userData.salary);

    },[])
    
    let handleSubmit = (e) => {
        e.preventDefault();//prevant default will stop auto submitting the form
        //console.log({userName,position,office,age,startDate,salary}); //destructured way of obj declaration
        
        let userData = {userName,position,office,age,startDate,salary}; //destructured way of obj declaration only if keys should match object variable
        userContext.userList[props.match.params.id-1]= userData; //updating in userList of that particular index
        userContext.setUserList([...userContext.userList]); //userList and setUserList are maintained by userContext

        history.push("/user") //redirection command to users component
    }


    return (
        <div>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Edit User</h1>
            </div>

            <div className="container">
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-lg-6 mt-2">
                            <label>User Name</label>
                            <input type="text" value={userName} onChange={(e)=>{setUserName(e.target.value)}} className="form-control" />
                        </div>
                        <div className="col-lg-6 mt-2">
                            <label>Position</label>
                            <input type="text" value={position} onChange={(e)=>{setPosition(e.target.value)}} className="form-control" />
                        </div>
                        <div className="col-lg-6 mt-2">
                            <label>Office</label>
                            <input type="text" value={office} onChange={(e)=>{setOffice(e.target.value)}} className="form-control" />
                        </div>
                        <div className="col-lg-6 mt-2">
                            <label>Age</label>
                            <input type="text" value={age} onChange={(e)=>{setAge(e.target.value)}} className="form-control" />
                        </div>
                        <div className="col-lg-6 mt-2">
                            <label>Start Date</label>
                            <input type="date" value={startDate} onChange={(e)=>{setStartDate(e.target.value)}} className="form-control" />
                        </div>
                        <div className="col-lg-6 mt-2">
                            <label>Salary</label>
                            <input type="text" value={salary} onChange={(e)=>{setSalary(e.target.value)}} className="form-control" />
                        </div>
                        <div className="col-lg-12 mt-2">
                            <input type="submit" value="Update" className="btn btn-primary"/>
                        </div>
                    </div>
                </form>
            </div>
        </div>    
    );
}

export default EditUser
