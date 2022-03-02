import React from "react";
import "./App.scss";
import Tasks from "../src/Components/Tasks";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { red } from '@mui/material/colors';
import {lightGreen} from '@mui/material/colors';

class App extends Tasks {
  state = { tasks: [], currentTask: "" };
  render() {
    const { tasks } = this.state;
    return (
      <div className="App flex">

        <Paper elevation={3} className="container">
          <div className="heading">TO-DO</div>
          <form
            onSubmit={this.handleSubmit}
            className="flex"
            style={{ margin: "15px 0" }}
          >
            <TextField
              id="demo-helper-text-aligned"
              label="Add TO-DO"
              variant="outlined"
              size="small"
              style={{ width: "80%" }}
              value={this.state.currentTask}
              required={true}
              onChange={this.handleChange}
            />
            <Button
              style={{ height: "40px" }}
              color="primary"
              variant="outlined"
              type="submit"
            >
              Add
            </Button>
          </form>

          <div className="taskContainer">
            <List sx={{
              width: '100%',
              maxWidth: 360,
              bgcolor: 'background.paper',
              overflow: 'auto',
              maxHeight: 400,
              '& ul': { padding: 0 },
            }}>
              {tasks.map((task) => {
                const labelId = `${task.task}`;

                return (
                  <ListItem
                    key={task._id}
                    secondaryAction={
                      <IconButton edge="end" aria-label="comments">
                        < DeleteIcon onClick={() => this.handleDelete(task._id)} sx={{ color: red[800] }} />
                      </IconButton>
                    }
                    disablePadding
                  >
                    <ListItemButton role={undefined} onClick={() => this.handleUpdate(task._id)} dense>
                      <ListItemIcon>
                        <Checkbox
                          color="success"
                          edge="start"
                          checked={task.completed}
                          tabIndex={-1}
                          disableRipple
                          inputProps={{ 'aria-labelledby': labelId }}
                        />
                      </ListItemIcon>
                      {task.completed ?
                        <ListItemText id={labelId} primary={` ${task.task}`} sx={{ color: lightGreen[800] }}/>
                        :
                        <ListItemText id={labelId} primary={` ${task.task}`}  />
                      }
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </div>
        </Paper>
      </div>
    );
  }
}

export default App;
