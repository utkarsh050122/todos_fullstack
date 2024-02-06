const express=require("express")
const mysql = require("mysql2");


const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
  });


  exports.task = (req, res) => {
    const { taskName, description, category, check, email } = req.body;
  
    // Step 1: Insert the task using parameterized query
    const insertQuery = `INSERT INTO tasks (taskName, description, category, currenttime, check, email)  
    VALUES (?, ?, ?, NOW(), ?, ?)`;

    // Use db.query with parameters to avoid SQL injection
    db.query(insertQuery, [taskName, description, category, check, email], (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Error occurred during task insertion');
      }
      // If there's no error, send a success response
      res.send('Task inserted successfully');
    });
};


//   exports.task = (req, res) => {
//     const { taskName, taskDescription, category, createdOn, complete , email } = req.body;
  
//     // Step 1: Insert the task
//     const insertQuery =`INSERT INTO tasks (taskName , taskDescription ,  category , createdOn, complete ,  email)  
//     VALUES (${taskName},${taskDescription},${category}, NOW(),${complete}, ${email})
// `
  
//     db.query(insertQuery, [createdOn], (err, result) => {
//       if (err) {
//         console.error(err);
//         return res.status(500).send('Error occurred during task insertion');
//       }
//     })
//   }
  
  //     // After insertion, check if the task status is 'pending'
  //     if (status === 0) {
  //       // Assuming an update operation is needed; replace with your actual update logic
  //       const updateQuery = `UPDATE tasks SET ... WHERE id = ?`; // Define your update conditions
  //       db.query(updateQuery, [id], (err, updateResult) => {
  //         if (err) {
  //           console.error(err);
  //           return res.status(500).send('Error occurred during task update');
  //         }
  
  //         // Step 4: Delete the task
  //         const deleteQuery = 'DELETE FROM tasks WHERE id = ?';
  //         db.query(deleteQuery, [id], (err, deleteResult) => {
  //           if (err) {
  //             console.error(err);
  //             return res.status(500).send('Error occurred during task deletion');
  //           }
  //           return res.send('Task has been updated and deleted successfully');
  //         });
  //       });
  //     } else {
  //       // If the status is not 'pending', no further action is taken
  //       return res.send('Task inserted successfully and no further action taken');
  //     }
  //   });
   //};
  






//  exports.task=(req, res) => {
//     //to add or update a task

//   const { id, taskName, taskDescription, category, createdOn, status } = req.body;
//   const query = `
//     INSERT INTO tasks (id, taskName, taskDescription, category, createdOn, status) 
//     VALUES (?, ?, ?, ?, ?, ?) 
//     ON DUPLICATE KEY UPDATE 
//       taskName = VALUES(taskName), 
//       taskDescription = VALUES(taskDescription), 
//       category = VALUES(category), 
//       createdOn = VALUES(createdOn), 
//       status = VALUES(status);
//   `;
  
//   // First, check if the task is pending
//   const checkQuery = 'SELECT status FROM tasks WHERE id = ?';
//   db.query(checkQuery, [id], (err, results) => {
//     if (err) {
//       console.error(err);
//       return res.status(500).send('Error occurred');
//     }
//     if (results.length > 0 && results[0].status === 0) { // Assuming status 0 is pending
//       // Task is pending, proceed with update
//       const updateQuery = `
//         UPDATE tasks 
//         SET taskName = ?, taskDescription = ?, category = ?, createdOn= ?, status = ? 
//         WHERE id = ?;
//       `;

//       db.query(updateQuery, [id], (err, result) => {
//         if (err) {
//           console.error(err);
//           return res.status(500).send('Error occurred during deletion'); 
//         }
//       });

//       // Task is pending, proceed with deletion
//       const deleteQuery = 'DELETE FROM tasks WHERE id = ?';
//       db.query(deleteQuery, [id], (err, result) => {
//         if (err) {
//           console.error(err);
//           return res.status(500).send('Error occurred during deletion'); 
//         }
       
//       });
//     } else {
//       // Task is not pending or not found
//       res.status(400).send('Task is either not pending or does not exist');
//     }
//   });
//     db.query(query, [id, taskName, taskDescription, category, createdOn, status], (err, result) => {
//         if (err) {
//           console.error(err);
//           return res.status(500).send('Error occurred');
//         }
//         res.send('Task added,updated and deleted successfully');
//     });
// }