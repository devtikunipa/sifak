import moment from "moment";
import 'moment/locale/id';


const MomenDate = (datetime) => {
    return moment(datetime).format("LL")
}

export default MomenDate;