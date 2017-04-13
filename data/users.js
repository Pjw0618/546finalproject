const usersInfoList = [
    {
        id: 0,
        username: "masterdetective123",
        firstName: "Sherlock",
        lastName: "Holmes",
        profession: "Detective",
        Bio: "Sherlock Holmes (/ˈʃɜːrlɒk ˈhoʊmz/) is a fictional private detective created by British author Sir Arthur Conan Doyle. Known as a \"consulting detective\" in the stories, Holmes is known for a proficiency with observation, forensic science, and logical reasoning that borders on the fantastic, which he employs when investigating cases for a wide variety of clients, including Scotland Yard.",
        password: "$2a$06$N0LC7CgaWwxHL8z9QmItSuW.RFPyWAAGf4KZ2SkAOFIYjpw0GcZHe"
    },
    {
        id: 1,
        username: "lemon",
        firstName: "Elizabeth",
        lastName: "Lemon",
        profession: "Writer",
        Bio: "Elizabeth Miervaldis \"Liz\" Lemon is the main character of the American television series 30 Rock. She created and writes for the fictional comedy-sketch show The Girlie Show or TGS with Tracy Jordan.",
        password: "$2a$06$1KAbCNauFiUYJOiPXlQHLeIqbgOMAuGdVk3EwJelThzn/KFUQc.w2"
    },
    {
        id: 2,
        username: "theboywholived",
        firstName: "Harry",
        lastName: "Potter",
        profession: "Student",
        Bio: "Harry Potter is a series of fantasy novels written by British author J. K. Rowling. The novels chronicle the life of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry . The main story arc concerns Harry's struggle against Lord Voldemort, a dark wizard who intends to become immortal, overthrow the wizard governing body known as the Ministry of Magic, and subjugate all wizards and Muggles.",
        password: "$2a$06$64WgUkXc6GfU513ZyN1VzORgUedxhfwVokxzOYSZ7ElHNWg3oyjLu"
    }
];

const bcrypt = require('bcrypt');

let exportedMethods = {
    
    getUserByUsernameAndPassword(username, password) {
        return new Promise((resolve, recject) => {
            if (username === undefined) return Promise.reject("No username provided");
            if (password === undefined) return Promise.reject("No password provided");

            for (let i = 0; i < usersInfoList.length; i++) {
                let res = bcrypt.compareSync(password, usersInfoList[i].password);
                if (usersInfoList[i].username == username && res)
                    resolve(usersInfoList[i]);
            }
            return reject("Wrong Password Provided");
        }).catch((Error) => {
            return Promise.reject(Error);
        });
    }
}

module.exports = exportedMethods;