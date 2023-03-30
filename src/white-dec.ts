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

export function handleApproval(event: ApprovalEvent): void {
  let entity = new Approval(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.approved = event.params.approved
  entity.tokenId = event.params.tokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleApprovalForAll(event: ApprovalForAllEvent): void {
  let entity = new ApprovalForAll(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.operator = event.params.operator
  entity.approved = event.params.approved

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleFunding(event: FundingEvent): void {
  let entity = new Funding(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.amount = event.params.amount
  entity.paperId = event.params.paperId
  entity.totalAmountFunded = event.params.totalAmountFunded

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePublished(event: PublishedEvent): void {
  let entity = new Published(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.paperId = event.params.paperId
  entity.tokenUri = event.params.tokenUri
  entity.author = event.params.author
  entity.owner = event.params.owner
  entity.allowFunding = event.params.allowFunding
  entity.fundAmount = event.params.fundAmount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransfer(event: TransferEvent): void {
  let entity = new Transfer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.tokenId = event.params.tokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUpdatePaper(event: UpdatePaperEvent): void {
  let entity = new UpdatePaper(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.paperId = event.params.paperId
  entity.allowFunding = event.params.allowFunding
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
