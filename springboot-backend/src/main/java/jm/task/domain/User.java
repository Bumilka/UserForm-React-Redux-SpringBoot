package jm.task.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotBlank;

@Entity
public class User{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "Username cannot be blank")
    private String username;
    @NotBlank(message = "Surname cannot be blank")
    private  String surname;
    private  String email;
    private String acceptanceCriteria;
    private String favoriteCat;
    private  String textarea;
    private String sendToEmail;


    public User() {
    }

    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }
    public void setUsername(String username) { this.username = username; }

    public String getSurname() {
        return surname;
    }
    public void setSurname(String surname) { this.surname = surname; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getAcceptanceCriteria() { return acceptanceCriteria;}
    public void setAcceptanceCriteria(String acceptanceCriteriaYes) {this.acceptanceCriteria = acceptanceCriteria;}

    public String getFavoriteCat() {
        return favoriteCat;
    }
    public void setFavoriteCat(String favoriteCat) {
        this.favoriteCat = favoriteCat;
    }

    public String getTextarea() {
        return textarea;
    }
    public void setTextarea(String textarea) {
        this.textarea = textarea;
    }

    public String getSendToEmail() {
        return sendToEmail;
    }
    public void setSendToEmail(String sendToEmail) {
        this.sendToEmail = sendToEmail;
    }
}
