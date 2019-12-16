import {
    combineReducers
} from 'redux';
import login_reducer from './Login/login_reducer'
import resumes_reducer from './candidates/resumes_reducer'
import job_posts from './Job_post/job_posts'
import job_post_activities from './Job_post_activities/job_post_activities'
import job_types from './Job_type/job_types'
import categories from './Categories/categories'
import job_locations from './Job_location/job_locations'
const appReducer = combineReducers({
    login_reducer,
    job_posts,
    job_post_activities,
    job_types,
    categories,
    job_locations,
    resumes_reducer,
})

export default appReducer;