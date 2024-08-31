import { Section, Cell, Image, List, Button, Modal, Placeholder } from '@telegram-apps/telegram-ui';
import type { FC } from 'react';

import { Link } from '../../../shared/ui/Link/ui';
import { ModalHeader } from '@telegram-apps/telegram-ui/dist/components/Overlays/Modal/components/ModalHeader/ModalHeader';

export const IndexPage: FC = () => {




  return (
    <List>
      <Section
        header='Депнуть в ракетку через тон валлет'
        footer=''
      >
        <Link to='/ton-connect'>
          <Cell
            before={<Image src={''} style={{ backgroundColor: '#007AFF' }}/>}
            subtitle='Connect your TON wallet'
          >
            TON Connect
          </Cell>
        </Link>
      </Section>
      <Section
        header='Обязательные кнопки'
        footer=''
      >
        <Link to='/'
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'nowrap',
          alignContent: 'center',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
      
        <Modal
          header={<ModalHeader>Вывод средств</ModalHeader>}
          trigger={<Button size="m">Вывести</Button>}
        >
        <Placeholder
          description="Для начала нужно депнуть"
          header="Что-то пошло не так"
        >
          <img
            alt="Telegram sticker"
            src="https://xelene.me/telegram.gif"
            style={{
              display: 'block',
              height: '144px',
              width: '144px'
            }}
          />
        </Placeholder>
      </Modal>
        </Link>
        {/* <Link to='/launch-params'>
          <Cell subtitle='Platform identifier, Mini Apps version, etc.'>Launch Parameters</Cell>
        </Link>
        <Link to='/theme-params'>
          <Cell subtitle='Telegram application palette information'>Theme Parameters</Cell>
        </Link> */}
      </Section>
    </List>
  );
};