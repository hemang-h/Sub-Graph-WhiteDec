import {
  Approval as ApprovalEvent,
  ApprovalForAll as ApprovalForAllEvent,
  Funding as FundingEvent,
  Published as PublishedEvent,
  Transfer as TransferEvent,
  UpdatePaper as UpdatePaperEvent
} from "../generated/WhiteDec/WhiteDec"
import {
  Approval,
  ApprovalForAll,
  Funding,
  Published,
  Transfer,
  UpdatePaper
} from "../generated/schema"
import { Bytes } from "@graphprotocol/graph-ts"

export function handleApproval(event: ApprovalEvent): void {
  let paper = new Approval(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  paper.owner = event.params.owner
  paper.approved = event.params.approved
  paper.tokenId = event.params.tokenId

  paper.blockNumber = event.block.number
  paper.blockTimestamp = event.block.timestamp
  paper.transactionHash = event.transaction.hash

  paper.save()
}

export function handleApprovalForAll(event: ApprovalForAllEvent): void {
  let paper = new ApprovalForAll(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  paper.owner = event.params.owner
  paper.operator = event.params.operator
  paper.approved = event.params.approved

  paper.blockNumber = event.block.number
  paper.blockTimestamp = event.block.timestamp
  paper.transactionHash = event.transaction.hash

  paper.save()
}
//////////////////DONE THIS ONE - funding.tokenUri left! 
export function handleFunding(event: FundingEvent): void {
  let funding = new Funding(Bytes.fromHexString(event.transaction.hash.toHex() + "-" + event.logIndex.toString()));
  let paper = Funding.load(Bytes.fromHexString(event.params.paperId.toHex()));

    funding.paperId = event.params.paperId;
    funding.amount = event.params.amount
    funding.to = event.params.to;
    funding.from = event.params.from;
    // paper.totalAmountFunded = event.params.totalAmountFunded

    funding.save();
    // paper.save();
}
////////////////////////////DONE ONLY paper.totalAmountFunded = "0"; left!
export function handlePublished(event: PublishedEvent): void {
  let funding = new Published(Bytes.fromHexString(event.transaction.hash.toHex() + "-" + event.logIndex.toString()));
  let paper = new Published(Bytes.fromHexString(event.params.paperId.toHex()));
  paper.owner = event.params.owner;
  paper.paperId = event.params.paperId;
  paper.tokenUri = event.params.tokenUri;
  event.params.allowFunding == true
    ? (paper.allowFunding = true)
    : (paper.allowFunding = false);
  paper.author = event.params.author;
  paper.fundAmount = event.params.fundAmount;
  funding.tokenUri = paper.tokenUri
  // paper.totalAmountFunded = "0";

  paper.save()
  funding.save()
}

export function handleTransfer(event: TransferEvent): void {}


export function handleUpdatePaper(event: UpdatePaperEvent): void {
  let paper = new UpdatePaper(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  paper.paperId = event.params.paperId
  event.params.allowFunding == true
    ? (paper.allowFunding = true)
    : (paper.allowFunding = false);
  paper.amount = event.params.amount

  paper.blockNumber = event.block.number
  paper.blockTimestamp = event.block.timestamp
  paper.transactionHash = event.transaction.hash

  paper.save()
}
