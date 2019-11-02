package jm.task.serviece;


import jm.task.domain.User;
import jm.task.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public User saveOrUpdateUser(User user){

        if(user.getStatus()==null || user.getStatus()==""){
            user.setStatus("Form_User");
        }
        return userRepository.save(user);
    }
}
