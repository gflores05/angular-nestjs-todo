import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';

admin.initializeApp({
  credential: admin.credential.cert({
    projectId: "papergames-1dc20",
    privateKey: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC7Hh4nxrXi2VF5\n4EeAd05/KGTZf8s7IcSyO79TGc1vfDgxXKVM2MFM9fM6qAzmlvCXCG45CrbHth8/\nW0vwlgWacDs/jixVRflxBT0Q0SkDS3B1PKznGlbkpmhmERNMg8d+T+iYj8JzCX5g\n5T2BEvvW7nYhgRBBdfHtjZFHdEMJw/pFRYZ+dScz3WY+Un72u0kSpsvTv51aNl6q\nQXG/jKO1/3grg2P2gFrvJhErvFsJEXCknpSCpsqfUMgpR+NrVmedVnmb2NMgtZo0\n1HwC87AO3F3+tLjqP8QmbNREgFFmeyRf3LY0RBC+o9lRGvJi5+cuwBjloxU63NEW\nyhI/O5UPAgMBAAECggEABqzPrGFhOkfzwtJc5DjQiVm42BRAFqQHci8OdEz1Cd3K\nqJW8MdsaCwBLhOBBoY8Cr/Vou5eY89PlfN5pZACkde3WBAtMcPhPkMtI8krvC+m9\n7ivtcRfjJkH6pgiq5+DCYsxzKQOyQjKCM+7jL36skqGSf9lGUEeAWC/KKtxIMSNu\nEdGaGWKVC0wQtKvAPXah7wYOInWJyHJCLnGm03xQbvYEVIpO/IMeJQ60RE/mH4HH\nwzit1yW+/gNkvea7x0s/LdIUqX2SuwyqS9uDumGKnQFVJrkFerXgeSQ42JnMgETN\nVDUh9nDVWYDqX3jvVTCFISEc0yj047zE7vk1oHz5oQKBgQDoF3vp/K114tLZt7qy\ngaTlZqUli5KwdXSFM9qFvQYEWWIYR0WjHeahScMdh4EH1VyQpc58hRJED1Vy5VIX\nAKY6tC7hZl45iFFoH5RnSmQhZWIthJO6uak0g9y/s85A/BgZS6cQk1KWnQxTQIJe\nJLg1oSkPxGRUUwOQ9gK0FgqjoQKBgQDOZJ4HRVaN10EZ/BzzDfafq/a/dyHOdxly\nR8jGPT8NHcc0W+ui6BKHv+bt7IFmsTyohcGOaXBrTSfOUXmjgSpvZEqzwFT8AunV\n2UPZbVwJxIppPFzpPSyqWdr3/oIXjC2hIvw9SgAvGQhmGmU5F6tcW1BekJNnDPZy\nRjvomht6rwKBgQDCAfd8JdLeC0hT5Gh1FThA5qfAFcb+KIDJZAoT52ljM1BzmQhW\nDQWf52fphD7QzIK/C0rq/dXB/Mth6t3PCqTpx3q0wfybvR7HmjZUjXPcEsKZ6AwR\nd2dA1cUunmAYJGMEqh+yFGRiME+APBl+FtXBRsFrQ7DWaDo/79VcslwcYQKBgFUp\ni1NwtvA8G66/KqrX3iWwbVY/sAFjf2p6WEwERZoB6YqfSzGjFNJSytTtu89F3sOi\nvWUn+K0t3vjxAYIH8Byag4B8IhUClr4YsjhrOYkGQh5+O9A5385C2Wlu6PsSalmM\n+AvKFx1X9PE8fvv52kl3nEgI2+mvnZk1hc7KmAAdAoGAB4H1QfgY++sM5N02fqLe\nIBp3oFTvTlnglDDjbdKPq3BsEv0asjdtzXGV0LGFexJY7TtOfm4wkyMoROUGjCPg\nXTW442yss0+LsJUuzBe04cWKXR47e8qTTrkt7meXnSI5pJhgdBLkBKVTwl7iZ6uK\n7aLnvgKQKQ5Jjt+yB8bNH+Q=\n-----END PRIVATE KEY-----\n",
    clientEmail: "firebase-adminsdk-2yecw@papergames-1dc20.iam.gserviceaccount.com"
  }),
  databaseURL: "https://papergames-1dc20.firebaseio.com"
});

const db = admin.firestore();

@Injectable()
export class FireService {

  async save(collection, id, doc): Promise<void> {
    const docRef = db.collection(collection).doc(id);

    await docRef.set(doc);
  }
}
