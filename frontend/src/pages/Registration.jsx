import React from "react";
import { Link } from "react-router-dom";
import RegistrationForm from "../components/authentication/RegistrationForm";
import "../styles/Registration.css";

function Registration() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 d-flex align-items-center">
                    <div className="content text-center px-4">
                        <h1 className="text-primary">Welcome to Immunio!</h1>
                        <p className="content">
                            This is a new Child Immunisation Tracking Website<br />
                            Register now and start enjoying <br />
                            Or if you already have an account, please{" "}
                            <Link to="/login/">login</Link>.
                        </p>
                    </div>
                </div>
                <div className="col-md-6 p-5">
                    <RegistrationForm />
                </div>
            </div>
        </div>
    );
}

export default Registration;