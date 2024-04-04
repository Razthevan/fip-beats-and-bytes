'use client';
import { useState, ChangeEvent } from 'react';
import {
  Modal,
  Button,
  Select,
  ModalBody,
  SelectItem,
  ModalHeader,
  ModalFooter,
  ModalContent,
  useDisclosure,
  NextUIProvider,
} from '@nextui-org/react';

import ApolloWrapper from '../ApolloWrapper';
import UserInformation from '@/app/components/UserInformation';
import SocialInformation from '@/app/components/SocialInformation';
import CurrentlyPlayingInformation from './pageContainer/CurrentlyPlayingInformation';

import { StationsEnum, WebRadio } from '../lib/graphql/graphql';

type PageContainerProps = { webRadios: WebRadio[] };

const PageContainer = ({ webRadios }: PageContainerProps) => {
  const [currentRadio, setCurrentRadio] = useState<WebRadio | undefined>(
    webRadios[1]
  );
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const handleSelectionChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setCurrentRadio(
      webRadios?.find((radio) => radio?.title === e.target.value)
    );
  };

  return (
    <ApolloWrapper>
      <NextUIProvider>
        <div className="mb-6 w-96 touch-none">
          <h1 className="animate-linear mb-18 bg-gradient-to-r from-dark via-pink-500 to-dark bg-[length:200%_auto] bg-clip-text text-6xl font-bold text-transparent cursor-default">
            What&apos;s playing?
          </h1>
        </div>
        <Select
          size="lg"
          radius="sm"
          fullWidth={false}
          disallowEmptySelection
          label="Select radio station"
          onChange={handleSelectionChange}
          selectedKeys={[currentRadio?.title as string]}
        >
          {webRadios?.map((radio) => (
            <SelectItem value={radio?.id} key={radio?.title}>
              {radio?.title}
            </SelectItem>
          ))}
        </Select>
        <div className="cursor-pointer absolute right-5 top-5" onClick={onOpen}>
          <UserInformation />
        </div>
        <div className="pt-10">
          <CurrentlyPlayingInformation
            playerUrl={currentRadio?.playerUrl}
            webRadioId={currentRadio?.id as StationsEnum}
          />
        </div>
        <Modal
          backdrop="blur"
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          className="bg-neutral-800 text-white"
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  Let's jam!
                </ModalHeader>
                <ModalBody>
                  <SocialInformation />
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Close
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </NextUIProvider>
    </ApolloWrapper>
  );
};

export default PageContainer;
