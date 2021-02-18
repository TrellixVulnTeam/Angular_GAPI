import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../classes/user';

@Component({
  selector : 'app-users',
  templateUrl: './users.component.html',
  styleUrls : ['./users.component.css']
})

export  class UsersComponent implements OnInit{
  title = 'Users';
  users: User[] = [];
  @Output('updateUser') updateUser = new EventEmitter<User>();
  constructor(private userService: UserService) {


  }
  ngOnInit(){
    this.users = this.userService.getUsers();
  }
  onDeleteUser(user: User){

    this.userService.deleteUser(user);
  }
  onSelectUser(user: User){
    const userCopy = Object.assign({},user); //creo un oggetto fittizio così a meno che non prevo SAVE non mi cambia l'oggetto
   this.updateUser.emit(userCopy);

  }
}