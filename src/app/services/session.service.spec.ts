import {SessionService} from "./session.service";

describe('SessionService', () => {
  let service: SessionService;
  beforeEach(() => { service = new SessionService(); });
 
  it('#IsLoggedIn should be false', () => {
    expect(service.isLoggedIn()).toBe(true);
  });
});
