const mongoose = require("mongoose");

const projectschema = require("../models/model");

const createProject = async (req, res) => {
    //creating a project details
};

const getProjects = async (req, res) => {
    //Display all project details
};

const getProject = async (req, res) => {
    //Display a specific project details
    const { id } = req.params;
};

const deleteProject = async (req, res) => {
    //Delete a specific project details
    const { id } = req.params;
};

const updateProject = async (req, res) => {
    //Display a specific project details
    const { id } = req.params;
};