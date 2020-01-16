export interface NewEvent {
 eventId: string,
 eventCreator: string,
 eventBanner: string,
 comments: Array<{ author: string, image: string, content:string }>
}
