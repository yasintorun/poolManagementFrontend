import AuthService from "../services/authService";

export default function useProvideAuth() {
    const [user, setUser] = useState(null)
    let authService = new AuthService()
    const  signin = (account, cb) => {
        return authService.login(account).then((result) => {
          setUser("user");
          cb();
        });
      };
    
      const signout = cb => {
        return fakeAuth.signout(() => {
          setUser(null);
          cb();
        });
      };
    
      return {
        user,
        signin,
        signout
      };
}