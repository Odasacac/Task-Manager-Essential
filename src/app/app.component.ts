import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { UserComponent } from './components/user/user.component';
import { DUMMY_USERS } from './others/dummy-users';
import { User } from './interfaces/user';
import { TasksComponent } from "./components/tasks/tasks.component";
import { AddtaskComponent } from './components/addtask/addtask.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, UserComponent, TasksComponent, AddtaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent 
{
  users: User[] = DUMMY_USERS;
  newTask: boolean= false;
  userNewTaskId: string = "";
 

  user: User = 
  {
    id: "",
    name: "",
    avatar: "",
    selected: false
  }

  usuarioSeleccionado(id: string)
  {
    this.newTask = false;
    this.users.map((user) => user.selected=false);
    const usuarioEncontradoPorId = this.users.find (user => user.id === id);

    if (usuarioEncontradoPorId != null)
    {
      this.user = usuarioEncontradoPorId
      this.user.selected = true;
    }
  }

  goToAddNewTask(userId: string)
  {
    this.newTask = true;
    this.userNewTaskId = userId;
  }

  closeAddNewTask()
  {
    this.newTask = false;
  }
}


