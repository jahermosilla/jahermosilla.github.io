import Degree from "./descriptions/Degree.vue";
import GreenUrbanData from "./descriptions/GreenUrbanData.vue";
import Master from "./descriptions/Master.vue";
import Prodevelop from "./descriptions/Prodevelop.vue";

export default [
    {
        type: 'education',
        title: 'Degree in Geomatics Engineering and Survey',
        place: 'Universitat Politècnica de València (UPV)',
        description: Degree,
        duration: ['Sep 2011', 'Jun 2015']
    },
    {
        type: 'education',
        title: 'Master in Geomatics Engineering and Geoinformation',
        place: 'Universitat Politècnica de València (UPV)',
        description: Master,
        duration: ['Sep 2015', 'Jun 2019']
    },
    {
        type: 'work',
        title: 'Full Stack Developer',
        place: 'Green Urban Data SL',
        description: GreenUrbanData,
        duration: ['Jan 2017', 'Dec 2018']
    },
    {
        type: 'work',
        title: 'Full Stack Developer',
        place: 'Prodevelop SL',
        description: Prodevelop,
        duration: ['Dec 2018', 'Sep 2021']
    }
]