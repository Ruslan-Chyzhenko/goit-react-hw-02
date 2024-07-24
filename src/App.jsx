import Profile from "./components/Profile/Profile";
import FriendList from "./components/FriendList/FriendList";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import Section from "./components/Section/Section";
import Container from "./components/Container/Container";
import Heading from "./components/Heading/Heading";

import userData from "./data/userData.json";
import friends from "./data/friends.json";
import transactions from "./data/transactions.json";

const App = () => {
  return (
    <Section>
      <Container>
        <Heading title="Task 1 Profile" bottom />
        <Profile
          name={userData.username}
          tag={userData.tag}
          location={userData.location}
          image={userData.avatar}
          stats={userData.stats}
        />
        <Heading title="Task 2 Freunds" bottom />
        <>
          <FriendList friends={friends} />
        </>
        <>
          <Heading title="Task 3 Transactions" bottom />
        </>
        <>
          <TransactionHistory items={transactions} />
        </>
      </Container>
    </Section>
  );
};

export default App;
