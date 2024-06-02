import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {

    listUsers(){
        return 'users list dentro do service'
    }
}
