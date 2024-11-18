import Realm from "realm";

const ScheduleSchema = {
    name: "Schedule",
    primaryKey: "_id",
    properties: {
        _id: "objectId",
        class: "string",
        day: "string",
        subjects: { type: "list", objectType: "Subject" },
    },
};

const SubjectSchema = {
    name: "Subject",
    properties: {
        name: "string", 
        time: "string",
    },
};

const scheduleData = [
    { 
        class: "A", 
        day: "Senin", 
        subjects: [
            { name: "Math", time: "07:00 - 08:00" },
            { name: "Science", time: "08:00 - 09:00" },
            { name: "History", time: "09:00 - 10:00" },
            { name: "Art", time: "10:00 - 11:00" },
            { name: "Music", time: "11:00 - 12:00" }
        ]
    },
    { 
        class: "A", 
        day: "Selasa", 
        subjects: [
            { name: "English", time: "07:00 - 08:00" },
            { name: "Math", time: "08:00 - 09:00" },
            { name: "PE", time: "09:00 - 10:00" },
            { name: "Music", time: "10:00 - 11:00" }
        ]
    },
    { 
        class: "A", 
        day: "Rabu", 
        subjects: [
            { name: "Science", time: "07:00 - 08:00" },
            { name: "History", time: "08:00 - 09:00" },
            { name: "Art", time: "09:00 - 10:00" },
            { name: "Math", time: "10:00 - 11:00" }
        ]
    },
    { 
        class: "A", 
        day: "Kamis", 
        subjects: [
            { name: "Math", time: "07:00 - 08:00" },
            { name: "Geography", time: "08:00 - 09:00" },
            { name: "Science", time: "09:00 - 10:00" },
            { name: "Art", time: "10:00 - 11:00" },
            { name: "Computer", time: "11:00 - 12:00" }
        ]
    },
    { 
        class: "A", 
        day: "Jumat", 
        subjects: [
            { name: "English", time: "07:00 - 08:00" },
            { name: "Math", time: "08:00 - 09:00" },
            { name: "PE", time: "09:00 - 10:00" },
            { name: "Computer", time: "10:00 - 11:00" }
        ]
    },

    { 
        class: "B", 
        day: "Senin", 
        subjects: [
            { name: "Math", time: "07:00 - 08:00" },
            { name: "Science", time: "08:00 - 09:00" },
            { name: "History", time: "09:00 - 10:00" },
            { name: "Geography", time: "10:00 - 11:00" }
        ]
    },
    { 
        class: "B", 
        day: "Selasa", 
        subjects: [
            { name: "Math", time: "07:00 - 08:00" },
            { name: "PE", time: "08:00 - 09:00" },
            { name: "Art", time: "09:00 - 10:00" },
            { name: "Computer", time: "10:00 - 11:00" }
        ]
    },
    { 
        class: "B", 
        day: "Rabu", 
        subjects: [
            { name: "Science", time: "07:00 - 08:00" },
            { name: "English", time: "08:00 - 09:00" },
            { name: "History", time: "09:00 - 10:00" },
            { name: "Art", time: "10:00 - 11:00" }
        ]
    },
    { 
        class: "B", 
        day: "Kamis", 
        subjects: [
            { name: "Math", time: "07:00 - 08:00" },
            { name: "Geography", time: "08:00 - 09:00" },
            { name: "PE", time: "09:00 - 10:00" },
            { name: "Computer", time: "10:00 - 11:00" }
        ]
    },
    { 
        class: "B", 
        day: "Jumat", 
        subjects: [
            { name: "English", time: "07:00 - 08:00" },
            { name: "Math", time: "08:00 - 09:00" },
            { name: "PE", time: "09:00 - 10:00" },
            { name: "Music", time: "10:00 - 11:00" }
        ]
    },

    { 
        class: "C", 
        day: "Senin", 
        subjects: [
            { name: "Math", time: "07:00 - 08:00" },
            { name: "Art", time: "08:00 - 09:00" },
            { name: "Science", time: "09:00 - 10:00" },
            { name: "PE", time: "10:00 - 11:00" }
        ]
    },
    { 
        class: "C", 
        day: "Selasa", 
        subjects: [
            { name: "English", time: "07:00 - 08:00" },
            { name: "History", time: "08:00 - 09:00" },
            { name: "PE", time: "09:00 - 10:00" },
            { name: "Geography", time: "10:00 - 11:00" }
        ]
    },
    { 
        class: "C", 
        day: "Rabu", 
        subjects: [
            { name: "Math", time: "07:00 - 08:00" },
            { name: "Science", time: "08:00 - 09:00" },
            { name: "Art", time: "09:00 - 10:00" },
            { name: "Geography", time: "10:00 - 11:00" }
        ]
    },
    { 
        class: "C", 
        day: "Kamis", 
        subjects: [
            { name: "English", time: "07:00 - 08:00" },
            { name: "Math", time: "08:00 - 09:00" },
            { name: "Computer", time: "09:00 - 10:00" },
            { name: "Art", time: "10:00 - 11:00" }
        ]
    },
    { 
        class: "C", 
        day: "Jumat", 
        subjects: [
            { name: "Science", time: "07:00 - 08:00" },
            { name: "Math", time: "08:00 - 09:00" },
            { name: "PE", time: "09:00 - 10:00" },
            { name: "History", time: "10:00 - 11:00" }
        ]
    },
];

const realm = new Realm({ 
    schema: [ScheduleSchema, SubjectSchema], 
    schemaVersion: 2,  
    migration: (oldRealm, newRealm) => {
        if (oldRealm.schemaVersion < 2) {
            const oldSchedules = oldRealm.objects("Schedule");
            const newSchedules = newRealm.objects("Schedule");
    
            oldSchedules.forEach((oldSchedule, index) => {
                const newSchedule = newSchedules[index];
                newSchedule.subjects = oldSchedule.subjects.map(subject => ({
                    name: subject.name || "Unknown",
                    time: subject.time || "Unknown"
                }));
            });
        }
    }
});

realm.write(() => {
    if (realm.objects("Schedule").isEmpty()) {
        scheduleData.forEach((item) => {
            realm.create("Schedule", {
                _id: new Realm.BSON.ObjectId(),
                class: item.class,
                day: item.day,
                subjects: item.subjects.map(subject => ({
                    name: subject.name,
                    time: subject.time
                }))
            });
        });
    }
});

export default realm