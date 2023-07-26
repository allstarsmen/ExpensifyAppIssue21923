import _ from 'underscore';
import PropTypes from 'prop-types';
import CONST from '../CONST';
import avatarPropTypes from '../components/avatarPropTypes';

export default PropTypes.shape({
    /** The specific type of chat */
    chatType: PropTypes.oneOf(['', ..._.values(CONST.REPORT.CHAT_TYPE)]),

    /** Whether there is an outstanding amount in IOU */
    hasOutstandingIOU: PropTypes.bool,

    /** List of icons for report participants */
    icons: PropTypes.arrayOf(avatarPropTypes),

    /** Are we loading more report actions? */
    isLoadingMoreReportActions: PropTypes.bool,

    /** Flag to check if the report actions data are loading */
    isLoadingReportActions: PropTypes.bool,

    /** Whether the user is not an admin of policyExpenseChat chat */
    isOwnPolicyExpenseChat: PropTypes.bool,

    /** Indicates if the report is pinned to the LHN or not */
    isPinned: PropTypes.bool,

    /** Whether we're waiting on submitter to add a bank account */
    isWaitingOnBankAccount: PropTypes.bool,

    /** The email of the last message's actor */
    lastActorEmail: PropTypes.string,

    /** The accountID of the last message's actor */
    lastActorAccountID: PropTypes.number,

    /** The text of the last message on the report */
    lastMessageText: PropTypes.string,

    /** The time of the last message on the report */
    lastVisibleActionCreated: PropTypes.string,

    /** The last time the report was visited */
    lastReadTime: PropTypes.string,

    /** The current user's notification preference for this report */
    notificationPreference: PropTypes.oneOfType([
        // Some old reports have numbers for the notification preference
        PropTypes.number,
        PropTypes.string,
    ]),

    /** The policy name to use for an archived report */
    oldPolicyName: PropTypes.string,

    /** The accountID of the report owner */
    ownerAccountID: PropTypes.number,

    /** List of accountIDs of participants of the report */
    participantAccountIDs: PropTypes.arrayOf(PropTypes.number),

    /** Linked policy's ID */
    policyID: PropTypes.string,

    /** Name of the report */
    reportName: PropTypes.string,

    /** ID of the report */
    reportID: PropTypes.string,

    /** The state that the report is currently in */
    stateNum: PropTypes.oneOf(_.values(CONST.REPORT.STATE_NUM)),

    /** The status of the current report */
    statusNum: PropTypes.oneOf(_.values(CONST.REPORT.STATUS)),

    /** Which user role is capable of posting messages on the report */
    writeCapability: PropTypes.oneOf(_.values(CONST.REPORT.WRITE_CAPABILITIES)),
});
