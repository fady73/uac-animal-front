import { Employee } from './employee';
import { Comment } from './comment';

export const EMPLOYEES: Employee[] = [
    {
        id: "0",
        name: "ahmed ali",
        phone: "01004022469",
        area: "abo tiga",
        image: "assets/images/employee.jpg",
        moderator: "mod1",
        comments: [
            {
                employee: "mahmoud kamal",
                company: "first",
                date: "2/2/2019",
                time: "8:33",
                location: "https://maps.google.com/maps?q=27.189136, 31.168530",
                comment: "this is good company",
                rate: "4"
            },
            {
                employee: "mahmoud kamal",
                company: "first",
                date: "2/2/2019",
                time: "8:33",
                location: "https://maps.google.com/maps?q=27.189136, 31.168530",
                comment: "this is good company",
                rate: "4"
            },
            {
                employee: "mahmoud kamal",
                company: "first",
                date: "2/2/2019",
                time: "8:33",
                location: "https://maps.google.com/maps?q=27.189136, 31.168530",
                comment: "this is good company",
                rate: "4"
            }

        ]

    },
    {
        id: "1",
        name: "ali ali",
        phone: "102525522552",
        area: "assiut city",
        image: "assets/images/employee.jpg",
        moderator: "mod2",
        comments: [
            {
                employee: "mahmoud kamal",
                company: "first",
                date: "2/2/2019",
                time: "8:33",
                location: "https://maps.google.com/maps?q=27.189136, 31.168530",
                comment: "this is good company",
                rate: "4"
            },
            {
                employee: "mahmoud kamal",
                company: "second",
                date: "2/2/2019",
                time: "8:33",
                location: "https://maps.google.com/maps?q=27.189136, 31.168530",
                comment: "this is good company",
                rate: "4"
            },
            {
                employee: "mahmoud kamal",
                company: "third",
                date: "2/2/2019",
                time: "8:33",
                location: "https://maps.google.com/maps?q=27.189136, 31.168530",
                comment: "this is good company",
                rate: "4"
            }

        ]

    }
]