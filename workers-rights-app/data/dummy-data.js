import RightsCategory from '../models/rightsCategory';
import SubRight from '../models/subRight';

export const RIGHTSCATEGORIES = [
    new RightsCategory('c1', 'Getting Hired', 'cat1.png'),
    new RightsCategory('c2', 'Mistreatment', 'cat2.png'),
    new RightsCategory('c3', 'Getting Paid', 'cat3.png'),
    new RightsCategory('c4', 'Safety & Health', 'cat4.png'),
    new RightsCategory('c5', 'Unions', 'cat5.png'),
    new RightsCategory('c6', 'Unemployment', 'cat6.png'),
];

export const SUBRIGHTS = [
    new SubRight('sr1', ['c3'], 'Deductions from Pay', 'cat3.png'),
    new SubRight('sr2', ['c3'], 'Final Paycheck Laws', 'cat3.png'),
    new SubRight('sr3', ['c3'], 'Meal and Rest Breaks', 'cat3.png'),
    new SubRight('sr4', ['c3'], 'Overtime Pay', 'cat3.png')
];