const {IntentsBitField, ActivityType, PermissionsBitField, Events} = require("discord.js");

const IntentOptions = {
    ...IntentsBitField.Flags,
};

const ActivityTypeAvailables = {
    playing: ActivityType.Playing,
    streaming: ActivityType.Streaming,
    listening: ActivityType.Listening,
    watching: ActivityType.Watching,
    custom: ActivityType.Custom,
    competing: ActivityType.Competing,
};

const EventAvailables = {
    timeout: "Boolean",
    music: "Boolean",
    functionError: "Boolean",
};

const SI_SYMBOL = ["", "K", "M", "B", "T"];

for (let i = 1; i <= 12; i++) {
    const power = Math.pow(10, i * 3);
    SI_SYMBOL.push(
        power >= 1e24
            ? SI_SYMBOL[i] + "D"
            : power >= 1e21
                ? SI_SYMBOL[i] + "V"
                : power >= 1e18
                    ? SI_SYMBOL[i] + "DT"
                    : power >= 1e15
                        ? SI_SYMBOL[i] + "T"
                        : power >= 1e12
                            ? SI_SYMBOL[i] + "Qa"
                            : power >= 1e9
                                ? SI_SYMBOL[i] + "B"
                                : power >= 1e6
                                    ? SI_SYMBOL[i] + "M"
                                    : power >= 1e3
                                        ? SI_SYMBOL[i] + "K"
                                        : SI_SYMBOL[i]
    );
}

const ApplicationCmdOptions = {
    id: "id of the slash cmd;.id",
    name: "name of the slash cmd;.name",
    description: "description of the slash cmd;.description",
    version: "version of slash cmd;.version",
    options: "options of slash cmd;.options",
    guildID: "guildID of the slash cmd (returns null for global);.guildID",
    applicationID: "returns Application ID",
    defaultPermission: "returns default permission of the slash cmd;.defaultPermission",
    timestamp: "returns timestamp of the creation of slash cmd (in ms);.timestamp",
    createdAt: "returns the date of creation of slash cmd;.createdAt",
};
const ChannelOptions = {
    createdAt: "createdAt",
    createdTimestamp: "createdTimestamp",
    defaultAutoArchiveDuration: "defaultAutoArchiveDuration",
    deletable: "deletable",
    deleted: "deleted",
    guildID: "guild?.id",
    id: "id",
    lastMessageContent: "lastMessage?.content?.deleteBrackets()",
    lastMessageID: "lastMessageId",
    lastPinAt: "lastPinAt",
    lastPinTimestamp: "lastPinTimestamp",
    manageable: "manageable",
    membersCount: "members?.size",
    name: "name?.deleteBrackets()",
    nsfw: "nsfw",
    parentName: "parent?.name",
    parentID: "parentId",
    position: "position",
    slowmode: "rateLimitPerUser",
    topic: "topic?.deleteBrackets()",
    type: "type",
    viewable: "viewable",
    permsAllowed: "permissionOverwrites?.cache?.map(x=>`type:${x.type}\nallowed:${x.allow}\nmention:${x.type ==='?'<@'+x.id+'>':'<@&'+x.id+'>'}`).join(`\n`)",
    permsDenied: "permissionOverwrites?.cache?.map(x=>`type:${x.type}\ndenied:${x.deny}\nmention:${x.type ==='member'?'<@'+x.id+'>':'<@&'+x.id+'>'}`).join(`\n`)",
    perms: "permissionOverwrites?.cache?.map(x=>`type:${x.type}\nallowed:${x.allow}\ndenied:${x.deny}\nmention:${x.type ==='member'?'<@'+x.id+'>':'<@&'+x.id+'>'}`).join(`\n`)",
    childrenID: "children?.map(x=>x.id)?.join(' , ')",
    childrenName: "children?.map(x=>x.name?.deleteBrackets())?.join(' , ')",
    bitrate: "bitrate",
    full: "full",
    joinable: "joinable",
    rtcRegion: "rtcRegion",
    userLimit: "userLimit",
    speakable: "speakable",
    archived: "archived",
    archivedAt: "archivedAt",
    archivedTimestamp: "archivedTimestamp",
    autoArchiveDuration: "autoArchiveDuration",
    threadMembersCount: "memberCount",
    messagesCount: "messagesCount",
    ownerID: "ownerId",
    sendable: "sendable",
    unarchivable: "unarchivable",
};
const MemberOptions = {
    id: "id",
    name: "user?.username?.deleteBrackets()",
    guildID: "guild.id",
    nick: "nickname || ''",
    roles: "roles?.cache?.filter(r => r.name !== '@everyone').map(r => r?.name.deleteBrackets()).join(', ')",
    partial: "partial??false",
    premiumStamp: "premiumSinceTimestamp || `0`",
    joinedStamp: "joinedTimestamp",
    voiceID: "voice.channelID || ''",
    displayHex: "displayHexColor",
    highestRoleID: "roles.highest.id",
    permissions: "permissions.toArray().goof('_')",
    newPermissions: `(() => {
        const curr = d.data.newm?.permissions.toArray()
        const old = d.data.oldm?.permissions.toArray() 
        
        return curr?.filter(p => !old.includes(p))?.goof("_")
    })()`,
    removedPermissions: `(() => {
        const curr = d.data.newm?.permissions.toArray()
        const old = d.data.oldm?.permissions.toArray() 
        
        return old?.filter(p => !curr.includes(p))?.goof("_")
    })()`,
    bannable: "bannable",
    kickable: "kickable",
    manageable: "manageable",
    status: "status",
    activities: "presence?.activities?.map(c => c.name).join(', ')",
    removedRoles: `roles.cache?.filter(r => ! d.data.newm?.roles.cache.has(r.id)).map(r => r.name).join(", ").deleteBrackets()`,
    addedRoles: `roles?.cache?.filter(r => !d.data.oldm.roles.cache.has(r.id)).map(r => r.name).join(", ").deleteBrackets()`,
    threadChannel: "thread?.channel?.name?.deleteBrackets()",
    threadFlags: "flags?.toArray()",
};

const ButtonStyleOptions = {
    primary: 1,
    secondary: 2,
    success: 3,
    danger: 4,
    link: 5,
};
const CacheOptions = {
    guilds: "GuildManager",
    messages: "MessageManager",
    channels: "ChannelManager",
    users: "UserManager",
    applicationCommands: "ApplicationCommandManager",
    applicationCommandPermissions: "ApplicationCommandPermissionManager",
    permissionOverwrites: "PermissionOverwritesManager",
    presences: "PresenceManager",
    reactions: "ReactionManager",
    reactionUsers: "ReactionUserManager",
    roles: "RoleManager",
    stageInstances: "StageInstanceManager",
    threads: "ThreadManager",
    threadMembers: "ThreadMemberManager",
    voiceStates: "VoiceStateManager",
    guildApplicationCommand: "GuildApplicationCommandManager",
    guildBans: "GuildBanManager",
    guildChannels: "GuildChannelManager",
    guildEmojis: "GuildEmojiManager",
    guildEmojiRoles: "GuildEmojiRoleManager",
    guildInvites: "GuildInviteManager",
    guildMembers: "GuildMemberManager",
    guildMemberRoles: "GuildMemberRoleManager",
    guildStickers: "GuildStickerManager",
};
const SlashOptionTypes = {
    subCommand: 1,
    subGroup: 2,
    string: 3,
    integer: 4,
    boolean: 5,
    user: 6,
    channel: 7,
    role: 8,
    mentionable: 9,
    number: 10,
};

const Permissions = {
    createinvite: PermissionsBitField["Flags"].CreateInstantInvite,
    createinstantinvite: PermissionsBitField["Flags"].CreateInstantInvite,
    kickmembers: PermissionsBitField["Flags"].KickMembers,
    banmembers: PermissionsBitField["Flags"].BanMembers,
    administrator: PermissionsBitField["Flags"].Administrator,
    managechannels: PermissionsBitField["Flags"].ManageChannels,
    manageguild: PermissionsBitField["Flags"].ManageGuild,
    addreactions: PermissionsBitField["Flags"].AddReactions,
    viewauditlog: PermissionsBitField["Flags"].ViewAuditLog,
    priorityspeaker: PermissionsBitField["Flags"].PrioritySpeaker,
    stream: PermissionsBitField["Flags"].Stream,
    viewchannel: PermissionsBitField["Flags"].ViewChannel,
    sendmessages: PermissionsBitField["Flags"].SendMessages,
    sendttsmessages: PermissionsBitField["Flags"].SendTTSMessages,
    managemessages: PermissionsBitField["Flags"].ManageMessages,
    embedlinks: PermissionsBitField["Flags"].EmbedLinks,
    attachfiles: PermissionsBitField["Flags"].AttachFiles,
    readmessagehistory: PermissionsBitField["Flags"].ReadMessageHistory,
    mentioneveryone: PermissionsBitField["Flags"].MentionEveryone,
    useexternalemojis: PermissionsBitField["Flags"].UseExternalEmojis,
    viewguildinsights: PermissionsBitField["Flags"].ViewGuildInsights,
    connect: PermissionsBitField["Flags"].Connect,
    speak: PermissionsBitField["Flags"].Speak,
    mute: PermissionsBitField["Flags"].MuteMembers,
    mutemembers: PermissionsBitField["Flags"].MuteMembers,
    deafen: PermissionsBitField["Flags"].DeafenMembers,
    deafenmembers: PermissionsBitField["Flags"].MuteMembers,
    movemembers: PermissionsBitField["Flags"].MoveMembers,
    usevad: PermissionsBitField["Flags"].UseVAD,
    changenickname: PermissionsBitField["Flags"].ChangeNickname,
    managenicknames: PermissionsBitField["Flags"].ManageNicknames,
    manageroles: PermissionsBitField["Flags"].ManageRoles,
    managewebhooks: PermissionsBitField["Flags"].ManageWebhooks,
    manageemojisandstickers: PermissionsBitField["Flags"].ManageEmojisAndStickers,
    manageguildexpressions: PermissionsBitField["Flags"].ManageGuildExpressions,
    requesttospeak: PermissionsBitField["Flags"].RequestToSpeak,
    manageevents: PermissionsBitField["Flags"].ManageEvents,    
    managethreads: PermissionsBitField["Flags"].ManageThreads,
    createpublicthreads: PermissionsBitField["Flags"].CreatePublicThreads,
    createprivatethreads: PermissionsBitField["Flags"].CreatePrivateThreads,
    useexternalsticker: PermissionsBitField["Flags"].UseExternalStickers,
    sendmessagesinthreads: PermissionsBitField["Flags"].SendMessagesInThreads,
    useembeddedactivities: PermissionsBitField["Flags"].UseEmbeddedActivities,
    moderatemembers: PermissionsBitField["Flags"].ModerateMembers,
    useapplicationcommands: PermissionsBitField["Flags"].UseApplicationCommands,
    viewcreatormonetizationanalytics: PermissionsBitField["Flags"].ViewCreatorMonetizationAnalytics,
    usesoundboard: PermissionsBitField["Flags"].UseSoundboard,
    useexternalsounds: PermissionsBitField["Flags"].UseExternalSounds,
    sendvoicemessages: PermissionsBitField["Flags"].SendVoiceMessages,
    all: Object.keys(PermissionsBitField["Flags"]),
};

const FormatPerms = {};
for (const perm in PermissionsBitField.Flags) {
    FormatPerms[perm.toLowerCase()] = perm;
}
const FormatOptions = (date) => {
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const days = [
        "Sunday", "Monday", "Tuesday", "Wednesday",
        "Thursday", "Friday", "Saturday"
    ];

    const padZero = (value) => (value.toString().length === 1 ? '0' + value : value);

    const getMeridiemHour = (hour) => (hour % 12 === 0 ? 12 : hour % 12);

    return {
        YY: date.getFullYear().toString().slice(-2),
        YYYY: date.getFullYear(),
        M: date.getMonth() + 1,
        MM: padZero(date.getMonth() + 1),
        MMM: months[date.getMonth()].slice(0, 3),
        MMMM: months[date.getMonth()],
        D: date.getDate(),
        DD: padZero(date.getDate()),
        d: date.getDay(),
        dd: days[date.getDay()].slice(0, 2),
        ddd: days[date.getDay()].slice(0, 3),
        dddd: days[date.getDay()],
        H: date.getHours(),
        HH: padZero(date.getHours()),
        h: getMeridiemHour(date.getHours()),
        hh: padZero(getMeridiemHour(date.getHours())),
    };
};

const Characters = [
    "1234567890",
    "qwertyuiopalskdjfhgznmxcbv",
    "qwertyuiopalskdjfhgznmxcbv".toUpperCase(),
].join("");

const EventsToIntents = {
    onMessage: "GuildMessages",
    onMessageDelete: "GuildMessages",
    onMessageUpdate: "GuildMessages",
    onMessageDeleteBulk: "GuildMessages",
    onGuildJoin: "Guilds",
    onGuildLeave: "Guilds",
    onGuildUpdate: "Guilds",
    onGuildUnavailable: "Guilds",
    onRoleCreate: "Guilds",
    onRoleUpdate: "Guilds",
    onRoleDelete: "Guilds",
    onChannelCreate: "Guilds",
    onChannelUpdate: "Guilds",
    onChannelDelete: "Guilds",
    onChannelPinsUpdate: "Guilds",
    onStageInstanceCreate: "Guilds",
    onStageInstanceUpdate: "Guilds",
    onStageInstanceDelete: "Guilds",
    onThreadCreate: "Guilds",
    onThreadUpdate: "Guilds",
    onThreadDelete: "Guilds",
    onThreadListSync: "Guilds",
    onThreadMemberUpdate: "Guilds",
    onThreadMembersUpdate: "Guilds",
    onJoin: "GuildMembers",
    onLeave: "GuildMembers",
    onMemberUpdate: "GuildMembers",
    onMemberAvailable: "GuildMembers",
    onMembersChunk: "GuildMembers",
    onEmojiCreate: "GuildEmojis",
    onEmojiDelete: "GuildEmojis",
    onEmojiUpdate: "GuildEmojis",
    onStickerCreate: "GuildEmojis",
    onStickerDelete: "GuildEmojis",
    onStickerUpdate: "GuildEmojis",
    onBanAdd: "GuildBans",
    onBanRemove: "GuildBans",
    onInviteCreate: "GuildInvites",
    onInviteDelete: "GuildInvites",
    onReactionAdd: "GuildMessageReactions",
    onReactionRemove: "GuildMessageReactions",
    onReactionRemoveAll: "GuildMessageReactions",
    onReactionRemoveEmoji: "GuildMessageReactions",
    onVoiceStateUpdate: "GuildVoiceStates",
    onPresenceUpdate: "GuildPresences",
    onTypingStart: "GuildMessageTypings",
    onInteractionCreate: "NonIntents",
    onApplicationCommandPermissionsUpdate: "NonIntents",
    onUserUpdate: "NonIntents",
    onWebhooksUpdate: "GuildWebhooks",
    onAutoModerationActionExecution: "AutoModerationExecution",
    onAutoModerationRuleDelete: "AutoModerationConfiguration",
    onAutoModerationRuleCreate: "AutoModerationConfiguration",
    onAutoModerationRuleUpdate: "AutoModerationConfiguration",
    onVariableCreate: "Custom",
    onVariableDelete: "Custom",
    onVariableUpdate: "Custom",
    onFunctionError: "Custom",
};

const EventsToDjsEvents = {
    onGuildJoin: Events.GuildCreate,
    onGuildLeave: Events.GuildDelete,
    onGuildUpdate: Events.GuildUpdate,
    onGuildUnavailable: Events.GuildUnavailable,
    onRoleCreate: Events.GuildRoleCreate,
    onRoleUpdate: Events.GuildRoleUpdate,
    onRoleDelete: Events.GuildRoleDelete,
    onChannelCreate: Events.ChannelCreate,
    onChannelUpdate: Events.ChannelUpdate,
    onChannelDelete: Events.ChannelDelete,
    onChannelPinsUpdate: Events.ChannelPinsUpdate,
    onStageInstanceCreate: Events.StageInstanceCreate,
    onStageInstanceUpdate: Events.StageInstanceUpdate,
    onStageInstanceDelete: Events.StageInstanceDelete,
    onThreadCreate: Events.ThreadCreate,
    onThreadUpdate: Events.ThreadUpdate,
    onThreadDelete: Events.ThreadDelete,
    onThreadListSync: Events.ThreadListSync,
    onThreadMemberUpdate: Events.ThreadMemberUpdate,
    onThreadMembersUpdate: Events.ThreadMembersUpdate,
    onJoin: Events.GuildMemberAdd,
    onLeave: Events.GuildMemberRemove,
    onMemberUpdate: Events.GuildMemberUpdate,
    onMemberAvailable: Events.GuildMemberAvailable,
    onMembersChunk: Events.GuildMembersChunk,
    onEmojiCreate: Events.GuildEmojiCreate,
    onEmojiDelete: Events.GuildEmojiDelete,
    onEmojiUpdate: Events.GuildEmojiUpdate,
    onStickerCreate: Events.GuildStickerCreate,
    onStickerDelete: Events.GuildStickerDelete,
    onStickerUpdate: Events.GuildStickerUpdate,
    onBanAdd: Events.GuildBanAdd,
    onBanRemove: Events.GuildBanRemove,
    onInviteCreate: Events.InviteCreate,
    onInviteDelete: Events.InviteDelete,
    onMessage: Events.MessageCreate,
    onMessageDelete: Events.MessageDelete,
    onMessageUpdate: Events.MessageUpdate,
    onMessageDeleteBulk: Events.MessageBulkDelete,
    onReactionAdd: Events.MessageReactionAdd,
    onReactionRemove: Events.MessageReactionRemove,
    onReactionRemoveAll: Events.MessageReactionRemoveAll,
    onReactionRemoveEmoji: Events.MessageReactionRemoveEmoji,
    onVoiceStateUpdate: Events.VoiceStateUpdate,
    onPresenceUpdate: Events.PresenceUpdate,
    onTypingStart: Events.TypingStart,
    onWebhooksUpdate: Events.WebhooksUpdate,
    onInteractionCreate: Events.InteractionCreate,
    onApplicationCommandPermissionsUpdate: Events.ApplicationCommandPermissionsUpdate,
    onUserUpdate: Events.UserUpdate,
    onAutoModerationActionExecution: Events.AutoModerationActionExecution,
    onAutoModerationRuleDelete: Events.AutoModerationRuleDelete,
    onAutoModerationRuleCreate: Events.AutoModerationRuleCreate,
    onAutoModerationRuleUpdate: Events.AutoModerationRuleUpdate,
    onVariableCreate: "variableCreate",
    onVariableDelete: "variableDelete",
    onVariableUpdate: "variableUpdate",
    onFunctionError: "functionError",
};

const EventstoFile = {
    onMessage: ["commands", "alwaysExecute", "nonPrefixed"],
    onMessageDelete: "deleteMessage",
    onMessageUpdate: "updateMessage",
    onMessageDeleteBulk: "bulkDeleteMessage",
    onChannelPinsUpdate: "channelPinsUpdate",
    onTypingStart: "start",
    onGuildJoin: "guildJoin",
    onGuildLeave: "guildLeave",
    onGuildUpdate: "guildUpdate",
    onGuildUnavailable: "guildUnavailable",
    onRoleCreate: "roleCreate",
    onRoleUpdate: "roleUpdate",
    onRoleDelete: "roleDelete",
    onChannelCreate: "channelCreate",
    onChannelUpdate: "channelUpdate",
    onChannelDelete: "channelDelete",
    onStageInstanceCreate: "stageInstanceCreate",
    onStageInstanceUpdate: "stageInstanceUpdate",
    onStageInstanceDelete: "stageInstanceDelete",
    onThreadCreate: "threadCreate",
    onThreadUpdate: "threadUpdate",
    onThreadDelete: "threadDelete",
    onThreadListSync: "threadListSync",
    onThreadMemberUpdate: "threadMemberUpdate",
    onThreadMembersUpdate: "threadMembersUpdate",
    onJoin: "join",
    onLeave: "leave",
    onMemberUpdate: "update",
    onMemberAvailable: "available",
    onMembersChunk: "chunk",
    onInviteCreate: "inviteCreate",
    onInviteDelete: "inviteDelete",
    onEmojiCreate: "create",
    onEmojiDelete: "delete",
    onEmojiUpdate: "update",
    onStickerCreate: "stickerCreate",
    onStickerDelete: "stickerDelete",
    onStickerUpdate: "stickerUpdate",
    onBanAdd: "add",
    onBanRemove: "remove",
    onReactionAdd: "add",
    onReactionRemove: "remove",
    onReactionRemoveAll: "removeAll",
    onReactionRemoveEmoji: "removeEmoji",
    onVoiceStateUpdate: "update",
    onPresenceUpdate: "update",
    onInteractionCreate: "interaction",
    onApplicationCommandPermissionsUpdate: "appCmdPermissionsUpdate",
    onUserUpdate: "userUpdate",
    onVariableCreate: "varCreate",
    onVariableDelete: "varDelete",
    onVariableUpdate: "varUpdate",
    onFunctionError: "functionError",
    onWebhooksUpdate: "update",
    onAutoModerationActionExecution: "autoModActionExecution",
    onAutoModerationRuleDelete: "autoModCreate",
    onAutoModerationRuleCreate: "autoModDelete",
    onAutoModerationRuleUpdate: "autoModUpdate",
};

const AllEvents = Object.keys(EventstoFile);

module.exports = {
    FormatOptions,
    ApplicationCmdOptions,
    ActivityTypeAvailables,
    EventAvailables,
    SI_SYMBOL,
    ButtonStyleOptions,
    ChannelOptions,
    MemberOptions,
    CacheOptions,
    SlashOptionTypes,
    Permissions,
    Characters,
    IntentOptions,
    FormatPerms,
    EventsToIntents,
    EventsToDjsEvents,
    AllEvents,
    EventstoFile,
};
