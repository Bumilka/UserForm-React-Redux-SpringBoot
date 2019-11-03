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

        if(user.getFavoriteCat()==null || user.getFavoriteCat()==""){
            user.setFavoriteCat("Cat");
        }
        return userRepository.save(user);
    }

    public Iterable<User> findAll(){
        return  userRepository.findAll();
    }
    public  User findById(Long id){
        return  userRepository.getById(id);
    }
    public  void delete(Long id){
        User user = findById(id);
        userRepository.delete(user);
    }
}
