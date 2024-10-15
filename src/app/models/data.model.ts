import { Basics } from "./basics.model";
import { Education } from "./education.model";
import { Work } from "./work.model";
import { Skill } from "./skill.model";


export interface JsonData {
    basics: Basics;
    work: Work[];
    education: Education[];
    skills: Skill[];
    // volunteer: Volunteer[];
    // awards: Award[];
    // publications: Publication[];
    // languages: Language[];
    // interests: Interest[];
    // references: Reference[];
}