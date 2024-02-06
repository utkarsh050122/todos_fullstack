const mysql = require("mysql2");

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
  });

exports.edit = (req, res) => {
    const { taskName, description, category, check, email } = req.body;
    const id = req.params.id; // Retrieve the task id from the URL parameter
    
    if (check === false) {
        const updateQuery = `UPDATE tasks SET taskName = ?, taskDescription = ?, category = ?, email = ? WHERE id = ?`;
        
        db.query(updateQuery, [taskName, description, category, email,id], (err, updateResult) => {
            if (err) {
                console.error(err);
                return res.status(500).send('Error occurred during task update');
            }
            
            if (updateResult.affectedRows > 0) {
                res.send('Task is updated successfully');
            } else {
                res.status(404).send('No task found with the given ID or no new data to update.');
            }
        });
    } else {
        res.status(400).send('Task is already complete and cannot be updated.');
    }
}; 


//for delete
exports.delete = (req, res) => {
    const { id } = req.params; // Get the task ID from the URL

    // First, check if the task is not complete
    const selectQuery = 'SELECT check FROM tasks WHERE id = ?';
    db.query(selectQuery, [id], (err, rows) => {
        if (err) {
            console.error(err);
            res.status(500).send('An error occurred during the task deletion');
            return;
        }

        if (rows.length === 0) {
            res.status(404).send('Task not found');
            return;
        }

        const task = rows[0];
        if (task.check) {
            // If the task is complete, prevent deletion
            res.status(400).send('Task is complete and cannot be deleted');
            return;
        }

        // Task is not complete; proceed with deletion
        const deleteQuery = 'DELETE FROM tasks WHERE id = ?';
        db.query(deleteQuery, [id], (err, result) => {
            if (err) {
                console.error(err);
                res.status(500).send('An error occurred during the task deletion');
                return;
            }

            if (result.affectedRows > 0) {
                res.send('Task deleted successfully');
            } else {
                // This case may not be necessary since you already checked the task exists
                res.status(404).send('No task found with the given ID');
            }
        });
    });
};




// exports.delete = (req, res) =>  {
//     const { taskName, taskDescription, category, complete, email } = req.body;
//     const { id } = req.params; // Get the task ID from the URL

//    'SELECT complete FROM tasks WHERE id = ?';
//    if(complete===false){
  
//         // Task is not complete; proceed with deletion
//         const deleteQuery = 'DELETE * FROM tasks WHERE id = ?';
//         db.query(deleteQuery, [taskName, taskDescription, category, complete, email,id]);

//         res.send('Task deleted successfully'); 

//     }
// };









// exports.edit = (req, res) => {

//     const { taskName, taskDescription, category, complete, email } = req.body;
//     const id = req.params.id; // Retrieve the task id from the URL parameter
//     //edit the task if task is no complete

//     if (complete === 0) {

//         const id = req.params.id; // Retrieve the task id from the URL parameter
        
//         const updateQuery = `UPDATE tasks SET taskName = ?, taskDescription = ?, category = ?, complete = ?, email = ? WHERE id = ?`;
      
//         // Assuming `id` is also provided in your request body or context, and you have defined all variables above
//         db.query(updateQuery, [taskName, taskDescription, category, complete, email, id], (err, updateResult) => {
//           if (err) {
//             console.error(err);
//             return res.status(500).send('Error occurred during task update');
//           }
//           // You might want to check updateResult.affectedRows to see if any rows were actually updated and respond accordingly
//           res.send('Task is updated successfully');
//         });
  
        // // Define the SQL query for deleting the task
        // const deleteQuery = `DELETE FROM tasks WHERE id = ?`;
    
        // // Execute the query to delete the task
        // db.query(deleteQuery, [id], (err, result) => {
        //     if (err) {
        //         console.error(err);
        //         return res.status(500).send('Error occurred during task deletion');
        //     }
    
        //     // Check if the deletion was successful, i.e., if any row was affected
        //     if (result.affectedRows > 0) {
        //         res.send('Task deleted successfully');
        //     } else {
        //         // If no rows were affected, it means no task was found with that ID
        //         res.status(404).send('Task not found');
        //     }
        // });
   // }
//}