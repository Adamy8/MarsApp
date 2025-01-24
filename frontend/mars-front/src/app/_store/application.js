import {create} from "zustand";

export const useApplicationStore = create((set) => ({
    apps: [],   // List of applications
    setapps: (apps) => set({apps}),

    createApplication: async (newApp) => {
        const res = await fetch("http://localhost:4000/api/applications",{
            method:"POST",
            headers:{"Content-Type": "application/json"},
            body:JSON.stringify(newApp)
        })
        const data = await res.json();
        set((state) => ({apps:{...state.apps, data}}))
        return {success:data.success, message:data.message}
    },

    fetchApplications: async () => {
        const res = await fetch("/api/applications");
        const data = await res.json();
        set({apps:data.data});
    },

    deleteApplication: async (id) => {
        const res = await fetch(`/api/applications/${id}`, {method:"DELETE"});
        const data = await res.json();
        if(!data.success) return { success:false, message: data.message };

        set((state) => ({apps: state.apps.filter((app) => app._id !== id)}));
        return { success:true, message: data.message };
    },

    updateApplication: async (id, updatedApp) => {
        const res = await fetch(`/api/applications/${id}`, {
            method:"PUT",
            headers:{"Content-Type": "application/json"},
            body:JSON.stringify(updatedApp)
        });
        const data = await res.json();
        if(!data.success) return { success:false, message: data.message };

        set((state) => ({
            apps: state.apps.map((app) => {
                if(app._id === id) return data.data;
                return app;
            })
        }));
        return { success:true, message: data.message };
    }
}));
