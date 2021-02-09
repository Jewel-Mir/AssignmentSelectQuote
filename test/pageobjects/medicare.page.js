import { Page } from './page'

class MedicarePage extends Page {
    // Elements go here

    get plansButton () { return $('a=Plans')}
    get typeOfPlanNeeded () { return $("//div[@class='anchor-wrap']")}
    


  
}
export { HomePage }
