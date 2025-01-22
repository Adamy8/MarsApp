import AppModel from "../model/app.model.js";
import mongoose from "mongoose";

export const createApp = async (req, res) => {
    try {
        const application = new AppModel(req.body);
        await application.save();
        res.status(201).json({success:true, data: application, message: "Application created successfully" });
    } catch (error) {
        res.status(500).json({success:false, message: error.message });
    }
}

export const updateApp = async (req, res) => {
    const {id} = req.params;
    //validate id check
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(400).json({success:false, message: "Invalid ID" });
    const app = req.body;

    try {
        const updatedApp = await AppModel.findByIdAndUpdate(id, app, {new: true});
        //existence check
        if(!updatedApp) return res.status(404).json({success:false, message: "Application not found" });
        res.status(200).json({success:true, data: updatedApp, message: "Application updated successfully" });
    } catch (error) {
        res.status(500).json({success:false, message: error.message });
    }
}

export const deleteApp = async (req, res) => {
    const {id} = req.params;
    //validate id check
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(400).json({success:false, message: "Invalid ID" });

    try {
        const deletedApp = await AppModel.findByIdAndDelete(id);
        //existence check
        if(!deletedApp) return res.status(404).json({success:false, message: "Application not found" });
        res.status(200).json({success:true, data: deletedApp, message: "Application deleted successfully" });
    } catch (error) {
        res.status(500).json({success:false, message: error.message });
    }
}

export const getAllApps = async (req, res) => {
    try {
        const applications = await AppModel.find({});
        res.status(200).json({success:true, data: applications, message: "All applications retrieved successfully" });
    } catch (error) {
        res.status(500).json({success:false, message: error.message });
    }
}

// don't think I need this, but I'll keep it for now
export const getApp = async (req, res) => {
    const {id} = req.params;
    //validate id check
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(400).json({success:false, message: "Invalid ID" });

    try {
        const application = await AppModel.findById(id);
        //existence check
        if(!application) return res.status(404).json({success:false, message: "Application not found" });
        res.status(200).json({success:true, data: application, message: "Application retrieved successfully" });
    } catch (error) {
        res.status(500).json({success:false, message: error.message });
    }
}